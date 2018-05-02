//* ************************************************************************ *//
//* MODEL COMPONENT                                                         *//
//* Definition for the <model> component.                                   *//
//* - To be used to show trained models in list or grid view.                                         *//
//* ************************************************************************ *//

//* Import <model> styles
import './todo.scss';

//* Import <model> controller
import TodoController from './todo.controller';

//* Define <model> tag
let ModelComponent = {
    bindings: {
    },
    controller: TodoController,
    controllerAs: 'ctrl_todo',
    template: require('./todo.html')
};

export default ModelComponent;
