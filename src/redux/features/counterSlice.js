import { createSlice } from "@reduxjs/toolkit";

const counterSlice =  createSlice({
    name:"counter",
    initialState:{
        counter:100
    },
    reducers:{
        increment:(state)=>{
            // state.counter = state.counter + 1
            state.counter += 1;
        },
        decrement:(state)=>{
            // state.counter = state.counter - 1
            state.counter -= 1;
        },
        incrementBy:(state,action)=>{
            // console.log(state,action)
            state.counter += action.payload;
        },
        decrementBy:(state,action)=>{
        state.counter -= action.payload
    }
    }
})
export const {increment,decrement,incrementBy,decrementBy} = counterSlice.actions
export default counterSlice.reducer;
