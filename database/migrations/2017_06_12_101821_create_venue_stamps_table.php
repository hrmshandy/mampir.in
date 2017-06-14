<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVenueStampsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('venue_stamps', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('stamp_id')->unsigned()->index();
            $table->foreign('stamp_id')
                ->references('id')
                ->on('stamps')
                ->onDelete('cascade');
            $table->integer('venue_id')->unsigned()->index();
            $table->foreign('venue_id')
                ->references('id')
                ->on('venues')
                ->onDelete('cascade');
            $table->integer('value')->default(0);
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
        Schema::dropIfExists('venue_stamps');
    }
}
