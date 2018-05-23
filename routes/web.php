<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return view('index');
});

$router->group(['prefix' => 'api'/*, 'middleware' => 'auth'*/], function () use ($router) {
	$router->get('mountains', ['uses' => 'MountainController@showAllMountains']);

	$router->get('mountains/{id}', ['uses' => 'MountainController@showOneMountain']);

	$router->get('mountains/region/{id}', ['uses' => 'MountainController@showRegionMountains']);

	$router->get('mountains/comapare/{id1}/{id2}', ['uses' => 'MountainController@compareMountains']);

	$router->post('mountains', ['uses' => 'MountainController@create']);

	$router->put('mountains/{id}', ['uses' => 'MountainController@update']);

	$router->delete('mountains/{id}', ['uses' => 'MountainController@delete']);
});