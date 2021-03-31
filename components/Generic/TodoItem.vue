<template>
    <div class="flex justify-between">
        <div class="todo-item py-4" :class="{ 'line-through': todo.isDone }">{{todo.title}}</div>
        <div class="flex items-baseline">
            <ActionButton v-if="!todo.isDone" class="bg-transparent" @clicked="markAsDone(todo.id)">
                <CheckIcon />
            </ActionButton>
            <ActionButton v-else class="bg-transparent" @clicked="undoTodo(todo.id)">
                <UndoIcon />
            </ActionButton>
            <ActionButton class="bg-transparent" @clicked="removeTodo(todo.id)">
                <TrashIcon />
            </ActionButton>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TodoItem',
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            markAsDone(id) {
                this.$store.dispatch('markAsDone', {id: id})
            },
            removeTodo(id) {
                this.$store.dispatch('removeTodo', {id: id})
            },
            undoTodo(id) {
                this.$store.dispatch('undoTodo', {id: id})
            },
        }
    }
</script>
<style lang="scss" scoped>
    /*.todo-item {*/
    /*    border-bottom: 1px solid grey;*/
    /*}*/
</style>