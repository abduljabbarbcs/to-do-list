//* ************************************************************************ *//
//* ANGULAR APP MODULE                                                       *//
//* Configure, create, and bootstrap the application.                        *//
//* ************************************************************************ *//


//* Import app configs
import AppConstants from './config/app.constants';
import AppConfig from './config/app.config';
import AppRun from './config/app.run';

//* Import app child modules
import './components';

import './routes';


//* Declare app dependencies
const requires = [
    //- vendor modules
    'ui.router',

    //- child modules
    'app.components',
    'app.routes',
    'ui.select'
];

//* Create application
angular
    .module(AppConstants.appName, requires)
    .constant('AppConstants', AppConstants)
    .config(AppConfig)
    .run(AppRun);

//* Bootstrap application
angular
    .bootstrap(document, [ AppConstants.appName ], { strictDi: false });
