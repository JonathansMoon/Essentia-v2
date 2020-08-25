<?php

namespace App\Http\Controllers;

use App\ApiMessages\ApiMessages;
use App\Http\Requests\PatientRequest;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    private $patient;

    public function __construct(Patient $patient)
    {
        $this->patient = $patient;
    }

    public function index()
    {
        $patient = $this->patient->paginate(10);
        return response()->json($patient, 200);
    }

    public function store(PatientRequest $request)
    {
        $patient = $request->all();

        try {
            $this->patient->create($patient);

            return response()->json([
                'data'  => [
                    'message'   => 'Patient create success!'
                ]
            ], 201);
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }

    public function show($id)
    {
        $patient = $this->patient->find($id);
        return response()->json($patient);
    }

    public function update(Request $request, $id)
    {
        try {
            $patient = $this->patient->findOrFail($id);
            $data = $request->all();

            $patient->update($data);

            return response()->json([
                'data'  => [
                    'message'   => 'Patient update success!'
                ]
            ], 200);
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }


    public function destroy($id)
    {
        try {
            $patient = $this->patient->findOrFail($id);
            $patient->delete();

            return response()->json([
                'data' => [
                    'message' => 'The patient' . $patient->name . ' delete success!'
                ]
            ], 200);
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }
}
