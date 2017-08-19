<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSearchLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('search_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('keyword_id')->unsigned()->index();
            $table->foreign('keyword_id')
                ->references('id')
                ->on('keywords')
                ->onDelete('cascade');
            $table->integer('user_id')->unsigned()->index()->nullable();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->string('city')->nullable();
            $table->string('ip', 20)->index();
            $table->string('user_agent')->nullable();
            $table->integer('hint')->default(0);
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
        Schema::dropIfExists('search_logs');
    }
}
