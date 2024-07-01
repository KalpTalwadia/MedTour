import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: {
        selectedTier: '',
        selectedOptions: {
            city: '',
            hospital: '',
            doctor: ''
        },
        name: '',
        phoneNumber: ''
    },
    showPrice: false
};

const tierSlice = createSlice({
    name: 'tier',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        setSelectedOptions: (state, action) => {
            state.formData.selectedOptions = { ...state.formData.selectedOptions, ...action.payload };
        },
        setShowPrice: (state, action) => {
            state.showPrice = action.payload;
        }
    }
});

export const { setFormData, setSelectedOptions, setShowPrice } = tierSlice.actions;

export default tierSlice.reducer;
