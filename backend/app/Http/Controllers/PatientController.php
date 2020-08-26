<?php

namespace App\Http\Controllers;

use App\ApiMessages\ApiMessages;
use App\Http\Requests\PatientRequest;
use App\Models\Patient;
use App\Services\PatientService;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    private $patient;
    private $patientService;

    public function __construct(Patient $patient, PatientService $patientService)
    {
        $this->patient = $patient;
        $this->patientService = $patientService;
    }

    public function index()
    {
        $patient = $this->patient->paginate(10);
        return response()->json($patient, 200);
    }

    public function store(PatientRequest $request)
    {
        $data = $this->patientService->create($request->all());
        return response()->json($data);
    }

    public function show($id)
    {
        $patient = $this->patient->find($id);
        return response()->json($patient);
    }

    public function update(Request $request, $id)
    {

        $data = $this->patientService->update($request->all(), $id);
        return response()->json($data);
    }


    public function destroy($id)
    {
        $data = $this->patientService->destroy($id);
        return response()->json($data);
    }
}
