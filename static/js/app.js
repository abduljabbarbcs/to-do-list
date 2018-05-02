webpackJsonp([0],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _todo = __webpack_require__(138);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//* ************************************************************************ *//
//* COMPONENTS MODULE                                                        *//
//* A child module that registers all the components on the app.             *//
//* ************************************************************************ *//

var ComponentsModule = angular.module('app.components', []);

//* Import components

//* Register components
ComponentsModule.component('todo', _todo2.default);

exports.default = ComponentsModule;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//* ************************************************************************ *//
//* APP CONFIGURATION                                                        *//
//* Provide any app configuration here.                                      *//
//* ************************************************************************ *//


function AppConfig($httpProvider, $locationProvider) {
    'ngInject';
}

exports.default = AppConfig;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//* ************************************************************************ *//
//* APP CONSTANTS                                                            *//
//* Declare any application-wide constants here.                             *//
//* ************************************************************************ *//

var AppConstants = {
    appName: 'todo'
};

exports.default = AppConstants;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//* ************************************************************************ *//
//* APP RUN                                                                  *//
//* Provide any logic necessary for the start of the app here. Will be run   *//
//* only once at the start of the app.                                       *//
//* ************************************************************************ *//

function AppRun($state) {
    'ngInject';

    $state.go('home');
}

exports.default = AppRun;

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(142);

//* Register routes
var RoutesModule = angular.module('app.routes', ['route.home']); //* ************************************************************************ *//
//* ROUTES MODULE                                                            *//
//* A child module that registers all the routes on the app.                 *//
//* ************************************************************************ *//

//* Import routes
exports.default = RoutesModule;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(129);

var _app2 = _interopRequireDefault(_app);

var _app3 = __webpack_require__(128);

var _app4 = _interopRequireDefault(_app3);

var _app5 = __webpack_require__(130);

var _app6 = _interopRequireDefault(_app5);

__webpack_require__(127);

__webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//* Declare app dependencies


//* Import app child modules
var requires = [
//- vendor modules
'ui.router',

//- child modules
'app.components', 'app.routes', 'ui.select'];

//* Create application
//* ************************************************************************ *//
//* ANGULAR APP MODULE                                                       *//
//* Configure, create, and bootstrap the application.                        *//
//* ************************************************************************ *//


//* Import app configs
angular.module(_app2.default.appName, requires).constant('AppConstants', _app2.default).config(_app4.default).run(_app6.default);

//* Bootstrap application
angular.bootstrap(document, [_app2.default.appName], { strictDi: false });

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(343);

var _todo = __webpack_require__(139);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//* Define <model> tag
//* ************************************************************************ *//
//* MODEL COMPONENT                                                         *//
//* Definition for the <model> component.                                   *//
//* - To be used to show trained models in list or grid view.                                         *//
//* ************************************************************************ *//

//* Import <model> styles
var ModelComponent = {
    bindings: {},
    controller: _todo2.default,
    controllerAs: 'ctrl_todo',
    template: __webpack_require__(345)
};

//* Import <model> controller
exports.default = ModelComponent;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//* ************************************************************************ *//
//* Todo CONTROLLER                                                        *//
//* Controller for the <Todo> component.                                   *//
//* ************************************************************************ *//

var TodoController = function () {
    function TodoController() {
        'ngInject';

        _classCallCheck(this, TodoController);

        this.availableTodos = [];
        this.todos = [];
        this.disabled = undefined;
        this.todo = '';
    }

    _createClass(TodoController, [{
        key: 'getArrayDiff',
        value: function getArrayDiff(a, b) {
            var ret = [];
            if (!(Array.isArray(a) && Array.isArray(b))) {
                return ret;
            }
            var i;
            var key;

            for (i = a.length - 1; i >= 0; i--) {
                key = a[i];
                if (-1 === b.indexOf(key)) {
                    ret.push(key);
                }
            }

            return ret;
        }
    }, {
        key: 'addTodo',
        value: function addTodo() {
            if (!(this.availableTodos.includes(this.todo) || this.todo == '')) {
                this.availableTodos.push(this.todo);
                this.todo = '';
            } else alert("todo already exist");
        }
    }, {
        key: 'removeSelected',
        value: function removeSelected() {
            this.availableTodos = this.getArrayDiff(this.availableTodos, this.todos);
            this.todos = [];
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.availableTodos = [];
            this.todos = [];
        }
    }, {
        key: 'selectAll',
        value: function selectAll() {
            this.todos = this.availableTodos.slice();
        }
    }]);

    return TodoController;
}();

exports.default = TodoController;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(344);

var _home = __webpack_require__(141);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//* Define '/' route
//* ************************************************************************ *//
//* HOME STATE CONFIGURATION                                                 *//
//* - state: 'home'                                                          *//
//* - route: '/'                                                             *//
//* ************************************************************************ *//

//* Import 'home' styles
function HomeConfig($stateProvider) {
    'ngInject';

    $stateProvider.state('home', {
        url: '/',
        template: __webpack_require__(346),
        controller: _home2.default,
        controllerAs: 'ctrl_home'
    });
}

//* Import 'home' controller
exports.default = HomeConfig;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//* ************************************************************************ *//
//* HOME CONTROLLER                                                          *//
//* Controller for the 'home' state.                                         *//
//* ************************************************************************ *//

var HomeController = function HomeController($scope) {
    'ngInject';

    _classCallCheck(this, HomeController);
};

exports.default = HomeController;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = __webpack_require__(140);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//* Define 'home' module
var HomeModule = angular.module('route.home', []);

//* Register '/' route
//* ************************************************************************ *//
//* HOME STATE ROUTE                                                         *//
//* Definition for the 'home' state.                                         *//
//* - A route for the app's layout.                                          *//
//* ************************************************************************ *//

//* Import 'home' config
HomeModule.config(_home2.default);

exports.default = HomeModule;

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<h3>ADD TODO</h3> <input type=text ng-model=ctrl_todo.todo placeholder=\"Enter todos here...\"> <button class=\"btn btn-default btn-xs\" ng-click=ctrl_todo.addTodo()>Add Todo</button> <hr> <h3>TODO List</h3> <div class=actions> <button class=\"btn btn-default btn-xs\" ng-click=ctrl_todo.selectAll()>Select All</button> <button class=\"btn btn-default btn-xs\" ng-click=ctrl_todo.removeSelected()>Remove selected</button> <button class=\"btn btn-default btn-xs\" ng-click=ctrl_todo.removeAll()>Remove all</button> </div> <ui-select multiple=multiple ng-model=ctrl_todo.todos theme=bootstrap close-on-select=false style=width:300px title=\"Choose a todo\"> <ui-select-match placeholder=\"Select todo...\">{{$item}}</ui-select-match> <ui-select-choices repeat=\"todo in ctrl_todo.availableTodos | filter:$select.search\"> {{todo}} </ui-select-choices> </ui-select> <p>Selected: {{ctrl_todo.todos}}</p> ";

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = " <div class=page-home> <todo></todo> </div> ";

/***/ })

},[136]);
//# sourceMappingURL=app.js.map