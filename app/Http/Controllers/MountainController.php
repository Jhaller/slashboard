<?php

namespace App\Http\Controllers;

use App\Author;
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