<?php

namespace App\Http\Controllers;

use App\Mountain;
use Illuminate\Http\Request;


class MountainController extends Controller
	{


		public function showAllMountains() {
				return response()->json(Mountain::all());
		}

		public function showOneMountain($id) {
			return response()->json(Mountain::find($id));
		}

		public function compareMountains($id1, $id2) {
			
			//** TODO **//

		}

		public function create(Request $request) {

			$this->validate($request, [
				'name' => 'required|string',
				'address' => 'required|string',
				'city' => 'required|string',				
				'state' => 'nullable|string|size:2',
				'country' => 'required|string',
				'continent' => 'required|string|size:2',
				'latitude' => ['required','regex:/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/'],
				'longitude' => ['required','regex:/^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/']
			]);

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
	}