// Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Actions
import { GetEbookDetailsAction } from '../Actions/EbookDetailsAction';

// Initial State
const initialState = {
    loading: false,
    EbookDetails: [],
    requests: {},
    error: ''
}

// GetEbookDetails
export const GetEbookDetails = createAsyncThunk(
    'GetEbookDetails',
    async (id) => {
        return await GetEbookDetailsAction(id);
    }
)

const EbookDetailsSlice = createSlice({
    name: 'EbookDetails',
    initialState,
    reducers: {},
    extraReducers: (Builder) => {
        // get data
        Builder.addCase(GetEbookDetails.pending, (State) => {
            State.loading = true;
        })
        Builder.addCase(GetEbookDetails.fulfilled, (State, Action) => {
            State.loading = false;
            State.EbookDetails = Action.payload.data;
            State.error = '';
        })
        Builder.addCase(GetEbookDetails.rejected, (State, Action) => {
            State.loading = false;
            State.EbookDetails = [];
            State.error = Action.error?.message;
        })
    },
});

export default EbookDetailsSlice.reducer;