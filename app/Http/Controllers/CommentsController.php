<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Lesson;
use App\Utils\Convert;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

/**
 * Class CommentsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahimes@gmail.com>
 */
class CommentsController extends Controller
{
    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @throws \Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function list(Request $request): LengthAwarePaginator
    {
        $filters = $request->input('filters', null);
        $sort = $request->input('sort');

        return Comment::with([
            'commentable',
            'author' => function ($query) {
                $query->with('roles:id,name');
            }
        ])
            ->when(isset($filters['model_id']) && isset($filters['model_type']), function (Builder $query) use ($filters) {
                $query->where('commentable_id', $filters['model_id'])
                    ->where('commentable_type', Convert::toModelName($filters['model_type']));
            })
            ->when(isset($filters['search']), function (Builder $query) use ($filters) {
                $query->where('body', 'like', '%' . $filters['search'] . '%');
            })
            ->when(Auth::user()->hasRole('teacher'), function ($query) {
                $teacherLessons = Auth::user()->teacherLessons()->pluck('lessons.id')->toArray();

                $query->where('commentable_type', Lesson::class);
                $query->whereIn('commentable_id', $teacherLessons);
            })
            ->when(count($sort), function($query) use ($sort) {
                $query->orderBy($sort[0]['colId'], $sort[0]['sort']);
            })
            ->paginate((int)$request->input('per_page', 10));
    }


    /**
     * @param string $commentableType
     * @param int $commentableId
     * @param Request $request
     * @return Paginator
     * @throws \Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(string $commentableType, int $commentableId, Request $request): Paginator
    {
        return Comment::with('replies')
            ->where([
                ['commentable_id', '=', $commentableId],
                ['commentable_type', '=', Convert::toModelName($commentableType)],
            ])
            ->whereNull('parent_id')
            ->orderBy('created_at', 'desc')
            ->simplePaginate((int)$request->input('per_page', 10));
    }

    /**
     * @param int $commentId
     * @param Request $request
     * @return Comment
     * @throws ValidationException
     * @throws \Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function store(int $commentId, Request $request): Comment
    {
        $this->validate($request, [
            'body'             => ['required', 'min:3'],
            'commentable_id'   => ['required', 'integer'],
            'commentable_type' => ['required', 'string', 'in:lesson']
        ]);

        $oldComment = Comment::where([
            ['body', '=', $request->input('body', '')],
            ['commentable_id', '=', $request->input('commentable_id')],
            ['commentable_type', '=', Convert::toModelName($request->input('commentable_type'))],
            ['user_id', '=', Auth::user()->id],
            ['parent_id', '=', $commentId > 0 ? $commentId : null],
        ])->count();

        if ($oldComment) {
            throw new \Exception('duplicate comment');
        }

        $comment = new Comment([
            'body'             => $request->input('body', ''),
            'commentable_id'   => $request->input('commentable_id'),
            'commentable_type' => Convert::toModelName($request->input('commentable_type')),
            'user_id'          => Auth::user()->id,
            'parent_id'        => $commentId > 0 ? $commentId : null
        ]);

        $comment->save();

        $comment->load('author');

        return $comment;
    }

    public function update(int $commentId, Request $request): Response
    {
        $this->validate($request, [
            'body' => ['required', 'min:3']
        ]);

        $comment = Comment::findOrFail($commentId);
        $comment->body = $request->input('body', '');
        $comment->save();

        return response([], 204);
    }

    public function destroy(int $commentId): Response
    {
        $comment = Comment::findOrFail($commentId);
        $comment->destroy();

        return response([], 204);
    }

    public function replies(int $parentId)
    {
        return Comment::where('parent_id', $parentId)
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function toggleApprove(int $commentId): Response
    {
        $comment = Comment::findOrFail($commentId);
        $comment->approved_at = $comment->approved_at ? null : now();
        $comment->save();

        return response([], 204);
    }

    public function delete(int $id)
    {
        Comment::findOrFail($id)->delete();

        return response(null, 204);
    }
}
