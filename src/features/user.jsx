import {createSlice} from "@reduxjs/toolkit" //helps to split logic 

export const userSlice = createSlice({
    name: "user",
    initialState: {value: {name: "", age: 0, email: ""}}, 
    reducers: {
        login: (state, action) =>{
            //this is where we change the state from the payload hover(action)
            state.value = action.payload;
        },
    },
})

export default userSlice.reducer;

 