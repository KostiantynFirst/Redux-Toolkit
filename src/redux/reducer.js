import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import { addTask, deleteTask, toggleCompleted, toggleAllCompleted, deleteAllCompleted, setStatusFilter } from './actions';

const  taskInitialStates = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];

export const tasksReducer = createReducer(taskInitialStates, {
    [addTask](state, action) {
        state.push(action.payload);
     },
    [deleteTask](state, action) { 
        return state.filter(task => task.id !== action.payload);
    },
    [toggleCompleted](state, action) { 
        for (const task of state) {
            if (task.id === action.payload) {
                task.completed = !task.completed;
                break;
            }
        }
    },
    [toggleAllCompleted](state) { 
        for (const task of state) {
            if(!task.completed) {
                task.completed = true;
            }
        }
     },
    [deleteAllCompleted](state) { 
        return state.filter(task => !task.completed)
     },
})

const filtersInitialStates = {
    status: statusFilters.all
}

export const filtersReducer = createReducer(filtersInitialStates, {
    [setStatusFilter](state, action) {
        state.status = action.payload;
    }
})



