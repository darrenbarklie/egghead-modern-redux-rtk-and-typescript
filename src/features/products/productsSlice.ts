import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";

export interface ProductsState {
  products: { [id: string]: Product };
}

const initialState: ProductsState = {
  products: {
    // @ts-ignore
    "123": {
      name: "New test product",
    },
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
