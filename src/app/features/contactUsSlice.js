import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: {
        name: '',
        email: '',
        phone: '',
        department: '',
        message: ''
    },
    popupVisible: false,
    loading: false
};

const contactUs = createSlice({
    name: 'contactUs',
    initialState,
    reducers: {
        setFormData(state, action) {
            state.formData = { ...state.formData, ...action.payload };
        },
        setPopupVisible(state, action) {
            state.popupVisible = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        resetFormData(state) {
            state.formData = initialState.formData;
        }
    }
});

export const { setFormData, setPopupVisible, setLoading, resetFormData } = contactUs.actions;
export default contactUs.reducer;
