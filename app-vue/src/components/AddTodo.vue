<template>
    <div class="row justify-content-center">
        <div class="col-10">
            <form @submit.prevent="OnSubmit" >
                <input type="text" v-model="Title">
                <button type="submit" class="btn btn-primary" >Create</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: 'AddTodo',
  components: {
  },
  props: { },
  data() {
      return {Title: "" };
  },
  methods: {
      OnSubmit() {
          if( this.Title.trim() )
          {
              const new_todo = { ID: Date.now(), Title: this.Title, Completed: false };
              this.$emit('add-todo', new_todo );
              this.Title = "";
          }
      }
    }  
});
</script>
<style scoped>
button{
    margin-left: 1rem;
}
</style>