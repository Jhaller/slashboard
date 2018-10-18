<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSnowId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mountains', function (Blueprint $table) {
            //
            $table->integer('snowId')->unique()->comment('for onthesnow.com');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mountains', function (Blueprint $table) {
            //
            $table->dropColumn('snowId');
        });
    }
}
