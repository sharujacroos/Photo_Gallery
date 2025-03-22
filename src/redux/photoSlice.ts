import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Photo, PhotoState } from "../types/types";

const initialState: PhotoState = {
  photos: [],
  loading: false,
  error: null,
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=50"
  );
  return (await response.json()) as Photo[];
});

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load photos.";
      });
  },
});

export default photoSlice.reducer;
