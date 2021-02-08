import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TodoModel } from "../models/todo.model";

@Component({
    selector: 'addtodo-form',
    templateUrl: './addtodo.component.html',
    styleUrls: ['./addtodo.component.css']
  })
  export class AddTodoComponent implements OnInit {
  
    public Title = "";
    @Output() onCreateTodo = new EventEmitter<TodoModel>();

    ngOnInit(): void {
 
  
    }

    public OnSubmit( event: any ) {

        event.preventDefault();
        this.onCreateTodo.emit( new TodoModel( this.Title ) );
        this.Title = "";
    }
}