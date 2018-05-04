<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mountain extends Model
{
	/**
	* The attributes that are mass assignable
	*
	* @var array
	*/
	protected $fillable = [
		'name', 'address', 'city', 'state', 'country', 'continent', 'latitude', 'longitude'
	];

	/**
	* The attributes excluded from the model's JSON form.
	*
	* @var array
	*/
	protected $hidden = [];
}