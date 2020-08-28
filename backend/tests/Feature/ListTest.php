<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ListTest extends TestCase
{
    use RefreshDatabase;

    public function testChecksTheReturnOfTheIndex()
    {
        $response = $this->json('GET', '/api/patients');

        $expected = [
            'current_page' => null,
            'data' => null,
            'first_page_url' => null,
            'from' => null,
            'last_page' => null,
            'last_page_url' => null,
            'next_page_url' => null,
            'path' => null,
            'per_page' => null,
            'prev_page_url' => null,
            'to' => null,
            'total' => null
        ];

        // Compare response with expected array
        $responseArray = json_decode($response->content(), true);
        $arrayCompared = array_diff_key($responseArray, $expected);

        $response->assertStatus(200);
        $this->assertEquals(0, count($arrayCompared));
    }
}
