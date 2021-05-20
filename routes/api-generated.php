<?php

\App\Http\RouteController::load(\App\Http\Controllers\ChordsArtistController::class, [
	'prefix' => 'chords-artist',
]);

\App\Http\RouteController::load(\App\Http\Controllers\ChordsSongController::class, [
	'prefix' => 'chords-song',
]);
