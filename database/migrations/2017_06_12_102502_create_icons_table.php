<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIconsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('icons', function (Blueprint $table) {
            $table->increments('id');
            $table->text('html');
            $table->timestamps();
        });
        Schema::create('iconables', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('icon_id')->unsigned()->index();
            $table->foreign('icon_id')
                ->references('id')
                ->on('icons')
                ->onDelete('cascade');
            $table->integer('iconable_id');
            $table->string('iconable_type');
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
        Schema::dropIfExists('icons');
        Schema::dropIfExists('iconables');
    }
}
