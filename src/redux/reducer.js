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
        return state.map(task => {
            if(task.id !== action.payload) return task;
            return  {...task, completed: !task.completed,
        };
    });

    },
    [toggleAllCompleted](state, action) { 
        return state.map(task => {
            if (task.completed) {
                return task;
            }
            return {
                ...task,
                completed: true,
            }});
     },
    [deleteAllCompleted](state, action) { 
        return state.filter(task => !task.completed)
     },
})

// export const tasksReducer = (state = taskInitialStates, action) => {
//     switch (action.type) {
//         case addTask.type:
//           return [...state, action.payload];

//         case deleteTask.type: 
//             return state.filter(task => task.id !== action.payload);

//         case toggleCompleted.type: 
//             return state.map(task => {
//                     if(task.id !== action.payload) return task;
//                     return  {...task, completed: !task.completed,
//                 };
//             });

//         case toggleAllCompleted.type: 
//             return state.map(task => {
//                 if (task.completed) {
//                     return task;
//                 }
//                 return {
//                     ...task,
//                     completed: true,
//                 }
//             });

//         case deleteAllCompleted.type:
//             return state.filter(task => !task.completed)

//         default:
//             return state;
//         }

// }

const filtersInitialStates = {
    status: statusFilters.all
}

export const filtersReducer = (state = filtersInitialStates, action) => {
        switch (action.type) {
            case setStatusFilter.type: 
                return {
                ...state,
                status: action.payload,
                };
   

        default: 
            return state;
    }
}

