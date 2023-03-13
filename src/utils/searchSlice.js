import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
    name:'search',
    initialState:{},
    reducers:{
        cacheSuggestion:(state,action)=>{
            //merging two objects
            state=Object.assign(state,action.payload)
        }
    }
})

export const {cacheSuggestion}=searchSlice.actions
export default searchSlice.reducer