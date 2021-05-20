<?php

namespace App\Models;

class ChordsSong extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'user_id',
		'artist_id',
		'title',
		'midi',
		'items',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	public function validate($data=[]) {
		return \Validator::make($data, ['title' => ['required']]);
	}

	public function chordsArtist() {
		return $this->belongsTo(\App\Models\ChordsArtist::class, 'artist_id', 'id');
	}

	public function user() {
		return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
	}
}