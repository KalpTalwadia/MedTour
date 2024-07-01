import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './features/fetchDataSlice';
import contactUsSlice from './features/contactUsSlice';
import TierSlice from './features/TierSlice';

export const store = configureStore({
    reducer: {
        services: serviceReducer,
        contactUs: contactUsSlice,
        tier: TierSlice,

    },
});
