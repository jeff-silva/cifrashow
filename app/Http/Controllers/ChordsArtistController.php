<?php

namespace App\Http\Controllers;

class ChordsArtistController extends Controller
{

	public function getSearch() {
		return \App\Models\ChordsArtist::querySearch();
	}

	public function getFind($id) {
		return \App\Models\ChordsArtist::find($id);
	}

	public function postSave() {
		return (new \App\Models\ChordsArtist)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\ChordsArtist::find($id)->remove();
	}
}