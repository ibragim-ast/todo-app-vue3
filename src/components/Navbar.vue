<template>
    <div class="navbar">
        <div class="navbar__title">To Do - App</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/tasks')">Задачи</my-button>
            <my-button style="margin-left: 20px;" @click="$router.push('/about')">
                О приложении</my-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    margin: 0 auto;
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    padding: 0 15px;
    align-items: center;
    justify-content: space-between;
}

.navbar__title {
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 400;
}
</style>