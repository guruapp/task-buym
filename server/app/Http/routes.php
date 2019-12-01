<?php

use App\Task;
use Illuminate\Http\Request;

Route::group(array('prefix' => 'api'), function()
{
    Route::resource('tasks', 'TaskController');
});

Route::get('{ember?}', function() {
    return View::make('ember');
})->where('ember', '.*');