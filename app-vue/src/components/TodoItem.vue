<template>
  <li>
    <span v-bind:class="{done:todo.Completed}">
       <input type="checkbox"
              v-model="Completed"
              v-on:change="OnSwitchCompleted">
       <strong>{{idx}}</strong>
       {{todo.Title}}
    </span>
    <button class="rm"
            v-on:click="OnDeleteModel">&times;</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'TodoItem',
  components: {
  },
  data() {
      return { Completed: false }
  },
  props: { todo: { type: Object, required: true },  idx: { type: Number, required: true } },
  created() {
        this.$data.Completed = this.todo.Completed;
    },
  methods:{
    OnDeleteModel() {
      this.$emit('delete-todo', { ID: this.todo.ID } );
    },
    OnSwitchCompleted() {        
        this.$emit( 'switch-completed', { ID: this.todo.ID, NewCompleted: !this.todo.Completed } );        
    }
  }  
});
</script>

<style scoped>
li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}
.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}
input{
  margin-right: 1rem;
}
.done{
  text-decoration: line-through;
}
</style>