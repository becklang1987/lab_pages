import {createSlice} from '@reduxjs/toolkit';

const counterStore = createSlice({
    name: 'counter',
    initialState: {
        value: 100,
        number:200
},
    reducers: {
        add: (state) => {
            state.value += 1;
            state.number += 1;
        },
        minus: (state) => {
            state.value -= 1;
            state.number -= 1;  
        },
        addBy: (state, action) => {
            state.value += action.payload;
            state.number += action.payload;
        },
        minusBy: (state, action) => {
            state.value -= action.payload;  
            state.number -= action.payload;  
    }
}})

const {add,minus,addBy,minusBy}=counterStore.actions;
const rinima =()=>{
    return (xx)=>{    
     xx(addBy(30));
}}

const reducer=counterStore.reducer;

export {add,minus,addBy,minusBy,rinima};

export default reducer