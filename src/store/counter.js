import {createSlice} from "@reduxjs/toolkit"
//const [counter,setCounter] = useState(initialState)

const initialState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        add1(state){
            state.counter = state.counter + 1;
        },
        reduce1(state){
            state.counter = state.counter - 1;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;