<?php

namespace App\Services;

use App\ApiMessages\ApiMessages;
use App\Models\Patient;

class PatientService
{
    private $patient;

    public function __construct(Patient $patient)
    {
        $this->patient = $patient;
    }

    public function create($patient)
    {
        try {
            $this->patient->create($patient);
            return [
                'data'  => [
                    'message'   => 'Patient create success!'
                ]
            ];
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return $message->getMessage();
        }
    }

    public function update($data, $id)
    {
        try {
            $patient = $this->patient->findOrFail($id);
            $patient->update($data);

            return [
                'data'  => [
                    'message'   => 'Patient update success!'
                ]
            ];
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return $message->getMessage();
        }
    }

    public function destroy($id)
    {
        try {
            $patient = $this->patient->findOrFail($id);
            $patient->delete();

            return [
                'data' => [
                    'message' => 'The patient ' . $patient->name . ' delete success!'
                ]
            ];
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return $message->getMessage();
        }
    }
}
