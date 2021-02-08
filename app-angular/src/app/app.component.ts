import { Component, OnInit } from '@angular/core';
import { TodoModel } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private _todos = Array<TodoModel>();

  ngOnInit(): void {  

    this._todos.push( new TodoModel( 'Install NODE.JS', 1, false ) );
    this._todos.push( new TodoModel( 'Install Angular', 2, true ) );
    this._todos.push( new TodoModel( 'Bici', 3, false ) );
    this._todos.push( new TodoModel( 'Sleep 8h', 4, true ) );

  }

  public get Todos(): Array<TodoModel> {
      
    return this._todos;

  }

  public OnCreateTodo( newTodo: TodoModel ) {
    
    this._todos.push( newTodo );

  }

  public OnDelete( id: number ) {
      
    // Emulation service
    if( confirm( "Delete todo with id: " + id ) ) {   
      this._todos = this._todos.filter( i => i.Id !== id );
    }
   }

}
