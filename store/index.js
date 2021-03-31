// state
export const state = () => ({
    todos: [
        {
            id: 1,
            title: 'Take the trash out',
            isDone: false
        },
        {
            id: 2,
            title: 'Mow the Lawn',
            isDone: true
        }
    ]
});

// getters
export const getters = () => ({
    todos: state => state.todos,
});

// mutations
export const mutations = {
    addTodo: (state, payload) => state.todos.push(payload),
    undoTodo: (state, payload) => state.todos.find(t => t.id === payload.id).isDone = false,
    removeTodo: (state, payload) => {
        let taskIndex = state.todos.findIndex(t => t.id === payload.id);
        taskIndex > -1 ? state.todos.splice(taskIndex, 1) : console.log('error');
    },
    markAsDone: (state, payload) => state.todos.find(t => t.id === payload.id).isDone = true
};

// actions
export const actions = {
    addTodo: (context, payload) => context.commit('addTodo', payload),
    markAsDone: (context, payload) => context.commit('markAsDone', payload),
    removeTodo: (context, payload) => context.commit('removeTodo', payload),
    undoTodo: (context, payload) => context.commit('undoTodo', payload),
};