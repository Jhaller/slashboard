<?php
namespace App\Http\Middleware;

use Closure;

class CorsMiddleWare{
	/**
	*
	* Handle an incoming request
	*
	* @param \Illuminate\Http\Request $request
	* @param \Closure $next
	* $return mixed
	*/
	public function handle($request, Closure $next){
		//Intercepts OPTIONS requests
		if($request->isMethod('OPTIONS')) {
			$response = response('', 200); 
		} else {
			// Pass the request to the next middleware
			$response = $next($request);
		}

		// Adds headers to the response
		$response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
		$response->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
		$response->header('Access-Control-Allow-Origin', '*');
		$response->header('Access-Control-Expose-Headers', 'Location');


		//Sends it
		return $response;
	}
}