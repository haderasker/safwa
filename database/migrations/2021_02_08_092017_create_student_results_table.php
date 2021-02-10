<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students_results', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('level_id');
            $table->unsignedBigInteger('academic_year_id');
            $table->integer('semester_one_score')->default(0);
            $table->integer('semester_two_score')->default(0);
            $table->timestamps();

            $table->foreign('student_id')->references('id')->on('users');
            $table->foreign('level_id')->references('id')->on('levels');
            $table->foreign('academic_year_id')->references('id')->on('academic_years');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students_results');
    }
}
