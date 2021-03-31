<template>
    <button @click="handleClick" class="flex-no-shrink p-2 border-2 rounded border-none">
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