<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $table = 'patient';
    protected $fillable = ['name', 'email', 'gender', 'telephone', 'birthDate', 'lastAttendance'];
    protected $hidden = ['created_at', 'updated_at'];
}
