<?php

namespace App\Http\Controllers;

class ChordsSongController extends Controller
{

	public function getSearch() {
		return \App\Models\ChordsSong::select(['id', 'user_id', 'artist_id', 'slug', 'name', 'created_at', 'updated_at'])
			->with(['user', 'chordsArtist'])
			->querySearch();
	}

	public function getFind($idSlug) {
		return \App\Models\ChordsSong::with([
			'chordsArtist',
		])->findIdSlug($idSlug);
	}

	public function postSave() {
		return (new \App\Models\ChordsSong)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\ChordsSong::find($id)->remove();
	}
}