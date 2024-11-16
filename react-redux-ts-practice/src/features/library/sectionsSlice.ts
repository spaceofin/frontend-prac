import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

const url = "http://localhost:3100/sections";

export const fetchSections = createAsyncThunk("sections/fetch", async () => {
  const response = await axios.get(url);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return response.data;
});

interface Section {
  id: number;
  name: string;
}

interface SectionsState {
  data: Section[];
  isLoading: boolean;
  error: SerializedError | null;
}

const initialState: SectionsState = {
  data: [],
  isLoading: false,
  error: null,
};

const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSections.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSections.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSections.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const selectSections = (state: RootState) => state.sections;
export default sectionsSlice.reducer;
