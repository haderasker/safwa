<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->string('comment');
            $table->unsignedBigInteger('lesson_id');
            $table->unsignedBigInteger('parent_id');
            $table->unsignedBigInteger('user_id');
            $table->dateTime('comment_time');
            $table->timestamps();
            $table->foreign('lesson_id')->references('id')->on('lessons');
            $table->foreign('parent_id')->references('id')->on('comments');
            $table->foreign('user_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
