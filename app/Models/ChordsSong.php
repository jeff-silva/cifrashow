<?php

namespace App\Models;

class ChordsSong extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'user_id',
		'artist_id',
		'slug',
		'name',
		'midi',
		'items',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	protected $appends = [
		'link',
	];

	public function getMidiAttribute($value) {
		if (! is_array($value)) {
			$value = json_decode($value, true);
		}
		return $value;
	}

	public function getLinkAttribute() {
		$link = [
			'profile' => '',
		];

		if ($this->slug) {
			$link['profile'] = "/chord/{$this->slug}";
		}

		return $link;
	}

	public function getItemsAttribute($value) {
		if (! is_array($value)) {
			$value = json_decode($value, true);
			$value = is_array($value)? $value: [];
		}
		return $value;
	}

	public function validate($data=[]) {
		return \Validator::make($data, ['name' => ['required']]);
	}

	public function chordsArtist() {
		return $this->belongsTo(\App\Models\ChordsArtist::class, 'artist_id', 'id');
	}

	public function user() {
		return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
	}
}