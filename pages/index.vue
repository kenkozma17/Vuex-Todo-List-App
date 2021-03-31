<template>
  <div class="container">
    <TodoContentWrapper>
      <template #title>
          <MainHeading>Todo List</MainHeading>
      </template>
      <template #content>
        <Input v-model="newTodo.title" @keyup.enter.native="addTodo" />
        <ActionButton class="text-white bg-green-600" @clicked="addTodo">Add</ActionButton>
      </template>
      <template #todos>
        <TodoList :items="todos" />
      </template>
    </TodoContentWrapper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: {
        id: '',
        title: null,
        isDone: false
      }
    }
  },
  methods: {
    addTodo() {
      this.newTodo.id = this.newTodoId;
      this.$store.dispatch('addTodo', Object.assign({},this.newTodo));
      this.newTodo.title = '';
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    newTodoId() {
      return this.todos.slice(-1)[0].id + 1;
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
