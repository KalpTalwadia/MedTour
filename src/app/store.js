import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './features/fetchDataSlice'; // Adjust the import according to your project structure

export const store = configureStore({
    reducer: {
        services: serviceReducer,
    },
});
