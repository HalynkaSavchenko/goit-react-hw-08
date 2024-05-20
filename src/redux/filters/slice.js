import { createSlice } from '@reduxjs/toolkit';

const filterInitialState ={
    filter: {
        name: '',
      }
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            state.filter.name = action.payload
        }, 
      }
    }
);

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;