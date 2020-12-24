<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Contracts\Pagination\Paginator;
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
     * @param string $commentableType
     * @param int $commentableId
     * @param Request $request
     * @return Paginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(string $commentableType, int $commentableId, Request $request): Paginator
    {
        return Comment::with('replies')
            ->where([
                ['commentable_id', '=', $commentableId],
                ['commentable_type', '=', $this->toModelName($commentableType)],
            ])
            ->whereNull('parent_id')
            ->orderBy('created_at', 'desc')
            ->simplePaginate($request->input('perPage', 10));
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
            ['commentable_type', '=', $this->toModelName($request->input('commentable_type'))],
            ['user_id', '=', Auth::user()->id],
            ['parent_id', '=', $commentId > 0 ? $commentId : null],
        ])->count();

        if ($oldComment) {
            throw new \Exception('duplicate comment');
        }

        $comment = new Comment([
            'body'             => $request->input('body', ''),
            'commentable_id'   => $request->input('commentable_id'),
            'commentable_type' => $this->toModelName($request->input('commentable_type')),
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

    private function toModelName(string $name): string
    {
        return 'App\\Models\\' . ucfirst($name);
    }
}
