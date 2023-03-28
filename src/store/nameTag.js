import {createSlice} from "@reduxjs/toolkit"
//const [counter,setCounter] = useState(initialState)

const initialState = {
    name: "",
};

const nameSlice = createSlice({
    name: "nameTag",
    initialState: initialState,
    reducers: {
        clearName(state){
            state.name = "";
        },
        addDotToName(state){
            state.name = state.name + ".";
        }
    }
})

export const counterActions = nameSlice.actions;

export default nameSlice.reducer;