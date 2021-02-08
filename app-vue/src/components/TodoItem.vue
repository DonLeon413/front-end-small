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
import { TodoModel } from '@/models/todomodel';
import { DeleteModel } from '@/models/deletemodel';
import { defineComponent } from "vue"
import { SwitchModel } from '@/models/switchmodel';
export default defineComponent({
  name: 'TodoItem',
  components: {
  },
  data() {
      return { Completed: false }
  },
  props: { todo: { type: TodoModel, required: true },  idx: { type: Number, required: true } },
  created() {
        this.$data.Completed = this.todo.Completed;
    },
  methods:{
    OnDeleteModel() {
      this.$emit('delete-todo', new DeleteModel( this.todo.ID ) );
    },
    OnSwitchCompleted() {
        this.$emit( 'switch-completed', new SwitchModel( this.todo.ID, !this.todo.Completed) );
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