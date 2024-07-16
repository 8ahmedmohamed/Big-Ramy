// Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

import EbooksList from './Reducers/EbooksListSlice';
import EbookDetails from './Reducers/EbookDetailsSlice';

export const MasterStore = configureStore({
    reducer: {
        EbooksList: EbooksList,
        EbookDetails: EbookDetails
    },
});