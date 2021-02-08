<template>
  <div>
    <h1>Todo Application</h1>
    <add-todo
      v-on:add-todo = "OnAddTodo">
    </add-todo>
    <hr>
    <TodoList v-bind:todos="todos"
              v-on:switch-completed="OnSwitchCompleted"
              v-on:delete-todo="OnDeleteTodo">      
    </TodoList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import HelloWorld1 from '@/components/HelloWorld.vue';
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import {TodoModel} from '@/models/todomodel';
import {SwitchModel} from '@/models/switchmodel';
import {DeleteModel} from '@/models/deletemodel';
export default defineComponent({
  name: 'App',
  components: {
    AddTodo,
    TodoList
  },
  data() {
    return { todos: [ new TodoModel( 1, 'Comprar pan.', false ), 
                      new TodoModel( 2, 'Comprar cerveza.', true ),
                      new TodoModel(3, 'Oficina.', false ),
                      new TodoModel( 4, 'Viendo una pelicula.',false ) ]}},           
  methods: {
    OnSwitchCompleted( args: SwitchModel ) {
        for( var i = 0; i < this.todos.length; i++ ) {
            if( this.todos[i].ID === args.ID )
            {
                this.todos[i].Completed = args.NewCompleted;
                break;
            }
        }   
    },
    OnAddTodo( newTodo: TodoModel ) {
        this.todos.push( newTodo );
    },
    OnDeleteTodo( args: DeleteModel ) {
        this.todos = this.todos.filter( ( item: TodoModel ) => {
              return ( item.ID !== args.ID );
        }) 
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
