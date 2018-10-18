<?php

namespace App\Http\Controllers;

use App\Mountain;
use Illuminate\Http\Request;
use GuzzleHttp\Client; 


class MountainController extends Controller
	{
		
		public function __construct(){

			$this->client = new Client([
				'base_uri' => 'https://www.onthesnow.com/widget/']);

		}

		public function showAllMountains() {
				return response()->json(Mountain::all());
		}

		public function showOneMountain($id) {

			$snowData = [];

			$mountainData = Mountain::where('snowId', '=', $id)->first();
			if(!isset($mountainData)){ $mountainData = new \stdClass(); }

			$reportHTML = $this->requestSnowHTML('snow?resort='.$id.'&webcam=1&color=b')->getElementsByTagName('td');

			$snowData['upper'] = [
				"elevation" => trim($reportHTML->item(0)->nodeValue),
				"depth" => trim($reportHTML->item(1)->nodeValue),
				"temp" => trim($reportHTML->item(2)->nodeValue),
				"icon" => trim($reportHTML->item(2)->getElementsByTagName('div')->item(1)->getAttribute('title'))];

			$snowData['lower'] = [
				"elevation" => trim($reportHTML->item(3)->nodeValue),
				"depth" => trim($reportHTML->item(4)->nodeValue),
				"temp" => trim($reportHTML->item(5)->nodeValue),
				"icon" => trim($reportHTML->item(5)->getElementsByTagName('div')->item(1)->getAttribute('title'))];

			if($reportHTML->length >= 12){ // Has last snowfall and open lifts row
				
				$lastSnowfall = explode('"', trim($reportHTML->item(8)->nodeValue));				
				$snowData['lastSnowfall'] = [
					"depth" => $lastSnowfall[0],
					"sinceDate" => $lastSnowfall[1]];				
				$snowData['lifts'] = trim($reportHTML->item(9)->nodeValue);
				$snowData['url'] = $reportHTML->item(10)->getElementsByTagName('a')->item(0)->getAttribute('href');

			} else { 
				$snowData['url'] = $reportHTML->item(6)->getElementsByTagName('a')->item(0)->getAttribute('href');
			}			

			$mountainData->snowData = $snowData;
			/*
			$test = [
				"data" => $mountainData,
				"report" => $snowData
			];
			*/

			return response()->json($mountainData);
		}

		public function searchMountains($query) {
			$query  = urldecode(strtolower($query));
			$mountains = Mountain::where('name', 'like', '%'.$query.'%')->get();

			return response()->json($mountains, 200);
		}

		public function compareMountains($id1, $id2) {
			
			//** TODO **//

		}

		public function create(Request $request) {

			$this->validate($request, $this->mountainValidation);

			$mountain = Mountain::create($request->all());

			return response()->json($mountain, 201);
		}

		public function update($id, Request $request) {
			$mountain = Mountain::findOrFail($id);
			$mountain->update($request->all());

			return response()->json($mountain, 200);
		}

		public function delete($id) {
			Mountain::findOrFail($id)->delete();
			return response('Deleted Successfully', 200);
		}

		private function getSnowData($snowId){

			$snowHTML = $this->requestSnowHTML('snow?resort='.$snowId.'&webcam=1&color=b&open=all');
			$data = array();

			foreach($snowHTML->getElementsByTagName('tr') as $tRow){

				//TODO Parse HTML
			}

			// TODO respond
		}

		private function populateMountainContinent($continent, $url){

			$snowHTML = $this->requestSnowHTML($url);
			$data = array();

			foreach($snowHTML->getElementsByTagName('a') as $resortLink){
				if($resortLink->hasAttribute('data-id')){

					$state =  ucwords(str_replace('-', ' ', explode('/', $resortLink->getAttribute('href'))[1]));

					array_push($data, array(
						'name' => $resortLink->getAttribute('title'),
						'state' => $state,
						'continent' => $continent,
						'snowId' => $resortLink->getAttribute('data-id'),
						'created_at' => date('Y-m-d H:i:s'),
						'updated_at' => date('Y-m-d H:i:s'))
					);
				}
			}
			/* TODO howto validate $data array instead of HTTP request
			$this->validate($data, array(
				'name' => 'required|string',
				'snow_id' => 'integer|unique:mountains',
				'address' => 'string',
				'city' => 'string',
				'state' => 'nullable|string', //TODO |size:2
				'country' => 'string',
				'continent' => 'string|size:2',
				'latitude' => ['nullable','regex:/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/'],
				'longitude' => ['nullable','regex:/^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/']
			));
			*/
			$mountains = Mountain::insert($data);

			return $mountains;
		}

		private function requestSnowHTML($url) {

			$data = array();
			$request = $this->client->request('GET', $url);

			if($request->getStatusCode() === 200 ) {
				$html = $request->getBody()->getContents();
				$dom = new \DOMDocument;
				@$dom->loadHTML($html);

				return $dom;
			}
			else{ //TODO return error
				return false;
			}
		}
	}