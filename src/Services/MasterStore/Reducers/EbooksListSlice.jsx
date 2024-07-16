// Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Actions
import { GetEbooksListAction } from '../Actions/EbooksListAction';

// Initial State
const initialState = {
    loading: false,
    EbooksList: [],
    requests: {},
    error: ''
}

// GetEbooksList
export const GetEbooksList = createAsyncThunk(
    'GetEbooksList',
    async () => {
        return await GetEbooksListAction();
    }
)

const EbooksListSlice = createSlice({
    name: 'EbooksList',
    initialState,
    reducers: {},
    extraReducers: (Builder) => {
        // get data
        Builder.addCase(GetEbooksList.pending, (State) => {
            State.loading = true;
        })
        Builder.addCase(GetEbooksList.fulfilled, (State, Action) => {
            State.loading = false;
            State.EbooksList = Action.payload.data;
            State.error = '';
        })
        Builder.addCase(GetEbooksList.rejected, (State, Action) => {
            State.loading = false;
            State.EbooksList = [];
            State.error = Action.error?.message;
        })
    },
});

export default EbooksListSlice.reducer;