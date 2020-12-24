<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersPropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_properties', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('country_id');
            $table->unsignedBigInteger('doctrine_id');
            $table->unsignedBigInteger('academic_year_id');
            $table->unsignedBigInteger('level_id');
            $table->enum('sex', ['male', 'female'])->nullable();
            $table->string('national_number')->nullable();
            $table->string('about_me')->nullable();
            $table->string('phone')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('nationality')->nullable();
            $table->json('address')->nullable();
            $table->string('language')->nullable();
            $table->string('ar_level')->nullable();
            $table->string('qualification')->nullable();
            $table->string('job')->nullable();
            $table->string('quran_level')->nullable();
            $table->string('religion')->nullable();
            $table->integer('upload_lessons')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('country_id')->references('id')->on('countries');
            $table->foreign('doctrine_id')->references('id')->on('doctrines');
            $table->foreign('academic_year_id')->references('id')->on('academic_years');
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
        Schema::dropIfExists('users_properties');
    }
}
