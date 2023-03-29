import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import nameTagReducer from "./nameTag";
import darkThemeReducer from "./darkTheme"

const store = configureStore({
    reducer: {
        counterSlice: counterReducer,
        nameSlice: nameTagReducer,
        darkThemeSlice: darkThemeReducer,
    },
});

export default store;