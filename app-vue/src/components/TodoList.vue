<template>
  <div class="TodoList">
    <ul>
        <TodoItem v-for="( todo, index ) in todos" :key="todo" 
                  v-bind:todo="todo"
                  v-bind:idx="index+1" 
                  v-on:switch-completed="OnSwitchCompleted"
                  v-on:delete-todo="OnDeleteTodo"></TodoItem>        
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import TodoItem from '@/components/TodoItem.vue'
export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: ['todos'],
  methods:{
    OnSwitchCompleted( args: any )
    {
        console.log( args );
        this.$emit('switch-completed', args );
    },
    OnDeleteTodo( args: any )
    {       
        this.$emit('delete-todo', args );
    }
  }
});
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
