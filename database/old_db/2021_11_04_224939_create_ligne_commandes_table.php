<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLigneCommandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ligne_commandes', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->bigInteger('id_cmd')->unsigned()->index();
            $table->bigInteger('id_prd')->unsigned()->index();

            $table->foreign('id_cmd')
                    ->references('id')
                    ->on('commandes')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');

            $table->foreign('id_prd')
                    ->references('id')
                    ->on('products')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
            $table->float('prix');
            $table->integer('quantite');
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
        Schema::dropIfExists('ligne_commandes');
    }
}
