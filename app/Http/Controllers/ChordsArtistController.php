<?php

namespace App\Http\Controllers;

class ChordsArtistController extends Controller
{

	public function getSearch() {
		return \App\Models\ChordsArtist::withCount([
			'chordsSongs',
		])->querySearch();
	}

	public function getFind($idSlug) {
		return \App\Models\ChordsArtist::findIdSlug($idSlug);
	}

	public function postSave() {
		return (new \App\Models\ChordsArtist)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\ChordsArtist::find($id)->remove();
	}
}