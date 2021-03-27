<template>
    <div class="todo-item py-4" :class="{ 'line-through': todo.isDone }">{{todo.title}}</div>
</template>
<script>
    export default {
        name: 'TodoItem',
        props: {
            todo: {
                type: Object,
                required: true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .todo-item {
        border-bottom: 1px solid grey;
    }
</style>