<template>
    <div>
        <h1>О приложении</h1>
        <p>Приложение "Список задач" сделано в рамках выполнения тестового задания.</p>
        <h2 class="about__title">Стек технологий</h2>
        <ul class="about__list">
            <li>JavaScript</li>
            <li>Vue 3</li>
            <li>CSS (ровно столько, чтобы не сильно тошнило)</li>
        </ul>
        <h2 class="about__title">Реализованный функционал</h2>
        <ul class="about__list">
            <li>Добавление задачи</li>
            <li>Редактирование задачи</li>
            <li>Удаление задачи</li>
            <li>Сортировка</li>
            <li>Поиск</li>
            <li>Немножко анимации</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about__title {
    padding-top: 20px;
}

.about__list {
    padding-top: 10px;
    padding-left: 30px;
}
</style>