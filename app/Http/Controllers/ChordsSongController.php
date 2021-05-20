<?php

namespace App\Http\Controllers;

class ChordsSongController extends Controller
{

	public function getSearch() {
		return \App\Http\Controllers\ChordsSongController::querySearch();
	}

	public function getFind($id) {
		return \App\Http\Controllers\ChordsSongController::find($id);
	}

	public function postSave(\Request $request) {
		return \App\Http\Controllers\ChordsSongController::store($request->all());
	}

	public function postDelete($id) {
		return \App\Http\Controllers\ChordsSongController::find($id)->remove();
	}
}