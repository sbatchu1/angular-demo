var app = angular.module("todo_app", []);

var todoController = function(){
    this.todos = [];
    this.add = function(){
        this.todos.push(this.todo_item);
        console.log(this.todos);
        this.todo_item = "";
    }

    this.edit = function(){
        
        for(var item in this.todos){
            console.log("make this field editable : "+this.todos[item]);
        }
    }

    this.delete = function(index){
        console.log("delete me :"+this.todos[index]);
        this.todos.splice(index, 1);
    }
}

app.controller("todoController", todoController);