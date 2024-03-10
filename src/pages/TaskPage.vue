<template>
    <div>
        <my-input style="margin-top: 15px;" v-focus v-model="searchQuery" placeholder="Поиск"></my-input>
        <div class="app__btns">
            <my-button @click="showDialog">Добавить задачу</my-button>
            <my-button @click="sortTasks">Отсортировать задачи</my-button>
        </div>

        <my-dialog v-model:show="dialogVisible">
            <task-form class="dialog__form" @create="createTask" :formTitle="editingTask ? 'Редактирование задачи' : 'Добавление задачи'"
                :submitButtonText="editingTask ? 'Обновить' : 'Добавить'" />
        </my-dialog>
        <task-list :tasks="searchedTasks" @remove="removeTask" @edit="editTask" />
    </div>
</template>

<script>
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';

export default {
    components: {
        TaskList, TaskForm
    },
    data() {
        return {
            tasks: [],
            dialogVisible: false,
            editingTask: null,
            searchQuery: '',
        }
    },
    methods: {
        createTask(task) {
            if (this.editingTask) {
                this.editingTask.text = task.text;
                this.editingTask = null;
            } else {
                this.tasks.push(task);
            }
            this.saveTasksToLocalStorage()
            this.dialogVisible = false
        },
        editTask(task) {
            this.editingTask = task;
            this.showDialog();
        },
        removeTask(task) {
            this.tasks = this.tasks.filter(t => t.id !== task.id)
            this.saveTasksToLocalStorage()
        },
        saveTasksToLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        loadTasksFromLocalStorage() {
            return JSON.parse(localStorage.getItem('tasks'))
        },
        showDialog() {
            this.dialogVisible = true
        },
        sortTasks() {
            this.tasks.sort((a, b) => a.text.localeCompare(b.text));
            this.saveTasksToLocalStorage()
        },
    },
    mounted() {
        this.tasks = this.loadTasksFromLocalStorage() || this.tasks
    },
    beforeUpdate() {
        this.saveTasksToLocalStorage();
    },
    computed: {
        searchedTasks() {
            return this.tasks.filter(task => task.text.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },

}
</script>

<style scoped>
.app__title {
    margin-bottom: 15px;
}

.app__btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}
</style>