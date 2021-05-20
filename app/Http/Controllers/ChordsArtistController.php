<?php

namespace App\Http\Controllers;

class ChordsArtistController extends Controller
{

	public function getSearch() {
		return \App\Http\Controllers\ChordsArtistController::querySearch();
	}

	public function getFind($id) {
		return \App\Http\Controllers\ChordsArtistController::find($id);
	}

	public function postSave(\Request $request) {
		return \App\Http\Controllers\ChordsArtistController::store($request->all());
	}

	public function postDelete($id) {
		return \App\Http\Controllers\ChordsArtistController::find($id)->remove();
	}
}