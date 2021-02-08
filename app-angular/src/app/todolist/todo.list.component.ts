import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TodoModel } from "../models/todo.model";

@Component({
    selector: 'todo-list',
    templateUrl: './todo.list.component.html',
    styleUrls: ['./todo.list.component.css']
  })
  export class TodoListComponent implements OnInit {
    
    @Input() Todos: Array<TodoModel>;
    @Output() onDelete = new EventEmitter<number>();
    
    ngOnInit(): void {
  
    }

    public OnDelete( id: number ) {      
       
     this.onDelete.emit( id );

    }
  }