<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/client-list',[ClientController::class, 'list']);

Route::get('/client/update/{id}',[ClientController::class, 'edit']);
Route::put('/client-update/{id}',[ClientController::class, 'update']);


Route::get('/client-info/{id}',[ClientController::class, 'details']);

Route::put('/client-add',[ClientController::class, 'insert']);

Route::get('/client/delete/{id}',[ClientController::class, 'delete']);
Route::put('/client-delete/{id}',[ClientController::class, 'destroy']);

Route::post('/registration',[RegisterController::class, 'store']);

Route::post("/login",[LoginController::class,'verify']);


Route::get('/client-search/{keyowrd}',[ClientController::class, 'searchClient']);



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
