<?php

namespace App\Models;

class ChordsArtist extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'slug',
		'name',
		'cover',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	protected $appends = [
		'link',
	];

	public function getCoverAttribute($value) {
		if (! is_array($value)) {
			$value = json_decode($value, true);
			$value = is_array($value)? $value: [];
		}
		return $value;
	}

	public function getLinkAttribute() {
		$link = [
			'profile' => '',
		];

		if ($this->slug) {
			$link['profile'] = "/artist/{$this->slug}";
		}

		return $link;
	}

	public function validate($data=[]) {
		return \Validator::make($data, ['name' => ['required']]);
	}

	public function chordsSongs() {
		return $this->hasMany(\App\Models\ChordsSong::class, 'artist_id', 'id');
	}
}