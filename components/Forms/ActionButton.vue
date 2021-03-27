<template>
    <button @click="handleClick" class="flex-no-shrink p-2 border-2 rounded text-teal bg-green-600 border-green-600 text-white">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'ActionButton',
        methods: {
            handleClick() {
                this.$emit('clicked');
            }
        }
    }
</script>