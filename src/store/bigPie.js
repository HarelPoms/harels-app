import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import nameTagReducer from "./nameTag";

const store = configureStore({
    reducer: {
        counterSlice: counterReducer,
        nameSlice: nameTagReducer,
    },
});

export default store;