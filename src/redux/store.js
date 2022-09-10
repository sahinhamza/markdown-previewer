import { configureStore } from "@reduxjs/toolkit";
import markdownSliceReducer from "./markdownSlice";

export const store = configureStore({
    reducer: {
        markdown: markdownSliceReducer
    }
})