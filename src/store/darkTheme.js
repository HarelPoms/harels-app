import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkTheme: false,
};

const darkThemeSlice = createSlice({
    name: "darkTheme",
    initialState,
    reducers: {
        changeTheme(state) {
        state.isDarkTheme = !state.isDarkTheme;
        },
    },
});

export const darkThemeActions = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
