import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IFilm} from "../../types/films.type";

interface ItemState {
    item: IFilm
    items: IFilm[]
}


const initialState: ItemState = {
    item: {} as IFilm,
    items: []
};

interface ItemsPayload {
    items: IFilm[]
}

interface ItemPayload {
    item: IFilm
}


export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<ItemsPayload>) {
           state.items = action.payload.items
        },
        setItem(state, action: PayloadAction<ItemPayload>) {
            state.item = action.payload.item
        },
    },
    extraReducers: (builder) => {
    },
});

export default itemsSlice.reducer;