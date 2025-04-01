import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
    headers: { "X-Api-Key": API_KEY },
  });
  
  if (response.data.length > 0) {
    return { content: response.data[0].quote, author: response.data[0].author };
  } else {
    throw new Error("No quote found");
  }
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {   
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.text = action.payload.content;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default quoteSlice.reducer;
