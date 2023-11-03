// import { createStore} from 'redux';
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
export const store = configureStore(rootReducer);