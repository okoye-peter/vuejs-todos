import axios from "axios";

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get(
            'http://jsonplaceholder.typicode.com/todos'
            );

        commit('setTodos', response.data);
    },

    async addTodo({ commit }, title){
        const response = await axios.post(
            'http://jsonplaceholder.typicode.com/todos', {
            title, completed: false
        });
        commit('newTodo', response.data);
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },

    async filter({ commit }, total) {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${total}`);

        commit('filterTodos', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => {state.todos = todos},
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    filterTodos: (state, todos) => {state.todos = todos}
};

export default {
    state,
    getters,
    actions,
    mutations
};