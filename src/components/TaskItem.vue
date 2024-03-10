<template>
    <div class="task">
        <div>
            <p class="task__text">{{ task.text }}</p>
        </div>
        <div class="task__btns">
            <div @click="$emit('edit', task)">
                <img class="task__btn-icon btn-icon" src="../assets/img/edit.png" alt="редактировать">
            </div>
            <div @click="$emit('remove', task)">
                <img class="task__btn-icon" src="../assets/img/remove.png" alt="удалить">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>
.task {
    padding: 0 15px;
    border: 1px solid teal;
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
}

.task__btns {
    display: flex;
    flex-direction: row;
    gap: 6px;
}

.task__btn-icon {
    height: 15px;
    width: 15px;
    cursor: pointer;
}
</style>