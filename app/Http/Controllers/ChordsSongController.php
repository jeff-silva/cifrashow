<?php

namespace App\Http\Controllers;

class ChordsSongController extends Controller
{

	public function getSearch() {
		return \App\Models\ChordsSong::querySearch();
	}

	public function getFind($id) {
		return \App\Models\ChordsSong::find($id);
	}

	public function postSave() {
		return (new \App\Models\ChordsSong)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\ChordsSong::find($id)->remove();
	}
}