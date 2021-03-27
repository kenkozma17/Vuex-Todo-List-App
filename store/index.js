// state
export const state = () => ({
    todos: [
        {
            title: 'Take the trash out',
            isDone: false
        },
        {
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
    addTodo: (state, payload) => state.todos.push(payload)
};

// actions
export const actions = {
      addTodo: (context, payload) => context.commit('addTodo', payload)
};