//* ************************************************************************ *//
//* Todo CONTROLLER                                                        *//
//* Controller for the <Todo> component.                                   *//
//* ************************************************************************ *//

class TodoController {
    constructor() {
        'ngInject';
        this.availableTodos = [];
        this.todos = []
        this.disabled = undefined;
        this.todo = '';
    }
    getArrayDiff(a, b) {
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
    addTodo() {
        if (!(this.availableTodos.includes(this.todo) || this.todo == '')){
            this.availableTodos.push(this.todo);
            this.todo = '';
        }
        else
            alert("todo already exist")
    }
    removeSelected(){
        this.availableTodos=this.getArrayDiff(this.availableTodos,this.todos)
        this.todos=[]
    }
    removeAll(){
        this.availableTodos=[]
        this.todos=[]
    }
    selectAll(){
        this.todos = this.availableTodos.slice();
    }
}

export default TodoController;
