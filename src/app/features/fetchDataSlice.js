import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.jsx';


export const fetchServiceDetails = createAsyncThunk(
    'services/fetchServiceDetails',
    async () => {
        const collections = ['procedures', 'hospital', 'doctors'];
        const promises = collections.map(async (collectionName) => {
            const collectionRef = collection(db, collectionName);
            const querySnapshot = await getDocs(collectionRef);
            const documents = querySnapshot.docs.map((doc) => doc.data());
            return { collectionName, documents };
        });
        const results = await Promise.all(promises);
        return results;
    }
);

const serviceDetailsSlice = createSlice({
    name: 'services',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServiceDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServiceDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchServiceDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default serviceDetailsSlice.reducer;
