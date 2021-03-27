<template>
    <input v-model="inputValue"
           v-bind="$attrs"
           class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
           :placeholder="placeholder">
</template>
<script>
    export default {
        name: 'Input',
        props: {
            placeholder: {
                type: String
            },
            value: {
                type: String
            }
        },
        computed: {
            inputValue: {
                get() {
                    return this.value;
                },
                set(inputValue) {
                    this.$emit('input', inputValue)
                }
            }
        }
    }
</script>