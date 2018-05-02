//* ************************************************************************ *//
//* APP RUN                                                                  *//
//* Provide any logic necessary for the start of the app here. Will be run   *//
//* only once at the start of the app.                                       *//
//* ************************************************************************ *//

function AppRun($state) {
    'ngInject';

    $state.go('home');
}

export default AppRun;
