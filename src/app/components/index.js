//* ************************************************************************ *//
//* COMPONENTS MODULE                                                        *//
//* A child module that registers all the components on the app.             *//
//* ************************************************************************ *//

let ComponentsModule = angular.module(
    'app.components', [ ]
);

//* Import components

import TodoController from './todo';


//* Register components
ComponentsModule

    .component('todo', TodoController)


export default ComponentsModule;
