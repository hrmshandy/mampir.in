<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateVenuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('venues', function (Blueprint $table) {
            $table->text('desc')->nullable()->after('cover');
            $table->string('phone_number')->nullable()->after('desc');
            $table->string('email')->nullable()->after('phone_number');
            $table->string('website')->nullable()->after('email');
            $table->text('opening_hours')->nullable()->after('website');
            $table->text('facilities')->nullable()->after('opening_hours');
        });

        Schema::dropIfExists('venue_details');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('venues', function (Blueprint $table) {
            $table->dropColumn(['desc', 'phone_number', 'email', 'website']);
        });
    }
}
