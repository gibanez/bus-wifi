'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome');
Route.group(() => {
  Route.resource('movie', 'MovieController');
  Route.get('media/sync', 'MediaController.sync').as('media.sync');
  Route.get('media/scan', 'MediaController.scan').as('media.scan');
  Route.post('media/refresh', 'MediaController.refresh').as('media.refresh');
  Route.get('media/image/:folder/:image', 'MediaController.image').as('media.image');
  Route.resource('media', 'MediaController');
}).prefix('api');
