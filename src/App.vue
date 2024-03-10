<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    components: {
        Navbar
    }
}
</script>

<style>
@import url("@/assets/fonts/inter.css");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: black;
}
</style>