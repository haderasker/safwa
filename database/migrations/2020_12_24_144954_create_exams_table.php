<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exams', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('testable_id');
            $table->string('testable_type');
            $table->string('label')->nullable();
            $table->integer('duration')->default(0);
            $table->integer('score')->default(0);
            $table->timestamp('published_at')->nullable();
            $table->timestamp('ended_at')->nullable();
            $table->unsignedBigInteger('level_id')->nullable();
            $table->enum('type', ['default', 'fail']);
            $table->timestamps();

            $table->foreign('level_id')->references('id')->on('levels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exams');
    }
}
