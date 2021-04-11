import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {Todo} from "../types/todo";
// state
export const state = () => ({
    todos: [
        {
            id: 1,
            title: 'Take the trash out',
            isDone: false
        }
    ] as Todo[]
});

export type RootState = ReturnType<typeof state>
// getters
export const getters: GetterTree<RootState, RootState> = {
    todos: state => state.todos,
};

// mutations
export const mutations: MutationTree<RootState> = {
    addTodo: (state, payload) => state.todos.push(payload),
    undoTodo: (state, payload) => {
        const todo = state.todos.find(t =>  t.id === payload.id);
        if(todo) todo.isDone = false;
    },
    removeTodo: (state, payload) => {
        let taskIndex = state.todos.findIndex(t => t.id === payload.id);
        taskIndex > -1 ? state.todos.splice(taskIndex, 1) : console.log('error');
    },
    markAsDone: (state, payload) => {
        const todo = state.todos.find(t =>  t.id === payload.id);
        if(todo) todo.isDone = true;
    }
};

// actions
export const actions: ActionTree<RootState, RootState> = {
    addTodo: (context, payload) => context.commit('addTodo', payload),
    markAsDone: (context, payload) => context.commit('markAsDone', payload),
    removeTodo: (context, payload) => context.commit('removeTodo', payload),
    undoTodo: (context, payload) => context.commit('undoTodo', payload),
};