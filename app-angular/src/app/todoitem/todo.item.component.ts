import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TodoModel } from "../models/todo.model";

@Component({
    selector: 'todo-item',
    templateUrl: './todo.item.component.html',
    styleUrls: ['./todo.item.component.css']
  })
  export class TodoItemComponent implements OnInit {
      
    @Input() Todo: TodoModel;
    @Input() Index: number;
    
    @Output() onDelete = new EventEmitter<number>();
    
    ngOnInit(): void {  
   
    }

    public OnCompletedChange( event: any ) {

        this.Todo.Completed = !this.Todo.Completed;

    }

    public OnClickDelete( event ) {

        this.onDelete.emit( this.Todo.Id );

    }
  }