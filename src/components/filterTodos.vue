<template>
    <div>
        Fiter Todos: 
        <select @change="filter(this.value)">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default({
    name: "filterTodos",

    methods: {
    ...mapActions(['filter']),

    }
})
</script>

<style scoped>
    select {
        margin-top: 20px;
        padding: 6px;
        border: 1px solid #41b883;
    }
</style>