<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function remise(){

        return $this->belongsTo(Remise::class);
    }

    public function image(){

        return $this->hasOne(Image::class);
    }
}
