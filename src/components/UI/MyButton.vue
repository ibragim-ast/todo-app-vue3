<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    padding: 10px 10px;
    background: none;
    color: teal;
    border-radius: 3px;
    cursor: pointer;
    border: 1px solid teal;
}
</style>