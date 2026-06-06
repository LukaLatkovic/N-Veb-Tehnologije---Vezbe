<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'index_number',
    ];

    public function courses()
    {
        return $this->belongsToMany(Course::class);
    }
}
