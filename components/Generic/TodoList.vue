<template>
    <div class="text-left w-full">
        <TodoItem v-for="todo in todos" :todo="todo" />
    </div>
</template>
<script>
    export default {
        name: 'TodoList',
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        computed: {
            todos() {
                return this.items;
            }
        }
    }
</script>