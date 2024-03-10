<template>
    <form @submit.prevent class="form">
        <h4 class="task__title">{{ formTitle }}</h4>
        <my-input style="width: 300px;" v-focus class="form__input" v-model="task.text" type="text" placeholder="Введите текст" />
        <my-button @click="createTask" style="align-items: flex-end;">
            {{ submitButtonText }}
        </my-button>
    </form>
</template>

<script>
export default {
    props: {
        formTitle: {
            type: String,
            default: 'Добавление задачи'
        },
        submitButtonText: {
            type: String,
            default: 'Добавить'
        }
    },
    data() {
        return {
            task: {
                text: ''
            }
        }
    },
    methods: {
        createTask() {
            this.task.id = Date.now()
            this.$emit('create', this.task)
            this.task = {
                text: '',
            }
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}
</style>