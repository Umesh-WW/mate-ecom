import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../http";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get("/products");
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
