import {configureStore, combineReducers }  from '@reduxjs/toolkit';
import { purchaseReducer } from '../Reducers/Reducer';
 
const rootreducer = combineReducers({purchaseReducer});
export const shop = configureStore({reducer:rootreducer});