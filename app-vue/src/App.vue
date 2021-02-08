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

export default defineComponent({
  name: 'App',
  components: {
    AddTodo,
    TodoList
  },
  data() {
    return { todos: [ { ID: 1, Title: 'Comprar pan.', Completed: false }, 
                      { ID: 2, Title: 'Comprar cerveza.', Completed: true },
                      { ID: 3, Title: 'Oficina.', Completed: false },
                      { ID: 4, Title: 'Viendo una pelicula.', Completed: false } ]}},           
  methods: {
    OnSwitchCompleted( args: any ) {
        
        for( var i = 0; i < this.todos.length; i++ ) {
            if( this.todos[i].ID === args.ID )
            {
                console.log( 'found:' + args.NewCompleted );
                this.todos[i].Completed = args.NewCompleted;
                break;
            }
        }   
    },
    OnAddTodo( newTodo: any ) {
        this.todos.push( newTodo );
    },
    OnDeleteTodo( args: any ) {

        this.todos = this.todos.filter( ( item ) => {
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
