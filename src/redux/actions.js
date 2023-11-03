import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', (text) => {
    return {
        payload: {
            text,
            completed: false,
            id: nanoid(),
        },
    }
});

export const deleteTask = createAction('tasks/deleteTask');
export const toggleCompleted = createAction('tasks/toggleCompleted');
export const toggleAllCompleted = createAction('tasks/toggleAllCompleted');
export const deleteAllCompleted = createAction('tasks/deleteAllCompleted');
export const setStatusFilter = createAction('filters/setStatusFilter');