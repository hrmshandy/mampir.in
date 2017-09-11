<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('version')->nullable();
            $table->text('title')->nullable();
            $table->bigInteger('author_id')->nullable();
            $table->string('author_name')->nullable();
            $table->string('author_url')->nullable();
            $table->string('media_id')->nullable();
            $table->string('provider_name')->nullable();
            $table->string('provider_url')->nullable();
            $table->string('type')->nullable();
            $table->integer('width')->nullable();
            $table->integer('height')->nullable();
            $table->text('html')->nullable();
            $table->string('thumbnail_url')->nullable();
            $table->integer('thumbnail_width')->nullable();
            $table->integer('thumbnail_height')->nullable();
            $table->string('source_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media');
    }
}
