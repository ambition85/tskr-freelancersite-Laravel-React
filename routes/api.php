<?php

use App\Http\Controllers\CreateController;
use App\Http\Controllers\CrewingController;
use App\Http\Controllers\CrudContoller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientAuthController;

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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user/register', [ClientAuthController::class, 'register']);
Route::post('/user/login', [ClientAuthController::class, 'login']);
Route::post('/crewing/create', [CrewingController::class, 'create']);
Route::get('/crewing/getCrewing', [CrewingController::class, 'getCrewing']);
Route::put('/crewing/filled/{id}', [CrewingController::class, 'filled']);
Route::put('/crewing/comment/{id}', [CrewingController::class, 'comment']);
Route::put('/crewing/fixcomment/{id}', [CrewingController::class, 'fixcomment']);
Route::post('/crewing/deletecomment/{id}', [CrewingController::class, 'deletecomment']);
Route::get('/category/getCategories', [CreateController::class, 'getCategories']);
Route::post('/category/addcategory', [CreateController::class, 'addCategories']);

Route::get('/controller/getDocuments', [CrudContoller::class, 'getDocuments']);
Route::post('/controller/addDocument', [CrudContoller::class, 'addDocument']);
Route::delete('/controller/deleteDocument/{id}', [CrudContoller::class, 'deleteDocument']);

Route::get('/controller/getMarintime', [CrudContoller::class, 'getMarintime']);
Route::post('/controller/addMarintime', [CrudContoller::class, 'addMarintime']);
Route::delete('/controller/deleteMarintime/{id}', [CrudContoller::class, 'deleteMarintime']);

Route::get('/controller/getCompetency', [CrudContoller::class, 'getCompetency']);
Route::post('/controller/addCompetency', [CrudContoller::class, 'addCompetency']);
Route::delete('/controller/deleteCompetency/{id}', [CrudContoller::class, 'deleteCompetency']);

Route::get('/controller/getMedical', [CrudContoller::class, 'getMedical']);
Route::post('/controller/addMedical', [CrudContoller::class, 'addMedical']);
Route::delete('/controller/deleteMedical/{id}', [CrudContoller::class, 'deleteMedical']);

Route::get('/controller/getOffshore', [CrudContoller::class, 'getOffshore']);
Route::post('/controller/addOffshore', [CrudContoller::class, 'addOffshore']);
Route::delete('/controller/deleteOffshore/{id}', [CrudContoller::class, 'deleteOffshore']);

Route::get('/controller/getSea', [CrudContoller::class, 'getSea']);
Route::post('/controller/addSea', [CrudContoller::class, 'addSea']);
Route::delete('/controller/deleteSea/{id}', [CrudContoller::class, 'deleteSea']);

Route::get('/controller/getInfo', [CrudContoller::class, 'getInfo']);
Route::post('/controller/addInfo', [CrudContoller::class, 'addInfo']);
Route::delete('/controller/deleteInfo/{id}', [CrudContoller::class, 'deleteInfo']);

Route::get('/controller/getPersonal', [CrudContoller::class, 'getPersonal']);
Route::post('/controller/addPersonal', [CrudContoller::class, 'addPersonal']);