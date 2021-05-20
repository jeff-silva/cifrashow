<?php

namespace App\Models;

class ChordsArtist extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'name',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	public function validate($data=[]) {
		return \Validator::make($data, ['title' => ['required']]);
	}

	public function chordsSongs() {
		return $this->hasMany(\App\Models\ChordsSong::class, 'artist_id', 'id');
	}
}