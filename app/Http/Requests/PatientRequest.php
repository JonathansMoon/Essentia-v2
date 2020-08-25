<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PatientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => ['email', Rule::unique('patient')->ignore($this->patient)],
            'gender' => 'required|max:1',
            'birthDate' => 'required|date_format:Y-m-d',
            'lastAttendance' => 'required|date_format:Y-m-d H:i:s',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'max' => 'O campo :attribute deve conter apenas 1 caracter',
            'date_format' => 'O campo :attribute não corresponde ao formato :format',
            'unique' => 'O campo :attribute já está vinculado a outro paciente'
        ];
    }
}
