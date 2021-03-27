<template>
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <slot name="title"></slot>
            <div class="flex mt-4">
                <slot name="content"></slot>
            </div>
            <div class="flex mt-4">
                <slot name="todos"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TodoContentWrapper'
    }
</script>