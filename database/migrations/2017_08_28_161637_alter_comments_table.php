<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('comments');

        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->index();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->integer('post_id')->unsigned()->index();
            $table->foreign('post_id')
                ->references('id')
                ->on('posts')
                ->onDelete('cascade');
            $table->integer('parent_id')->unsigned()->index()->nullable();
            $table->foreign('parent_id')
                ->references('id')
                ->on('comments')
                ->onDelete('cascade');
            $table->text('content');
            $table->enum('status', ['pending', 'approved', 'spam'])->default('approved');
            $table->string('user_agent')->nullable();
            $table->timestamps();
            $table->softDeletes();
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
