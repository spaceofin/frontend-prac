import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

const baseUrl = "http://localhost:3100/comments";

export const fetchComments = createAsyncThunk(
  "comments/fetch",
  async (bookId: number) => {
    const response = await axios.get(`${baseUrl}?bookId=${bookId}`);

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    return response.data;
  }
);

interface Comment {
  id: number;
  comment: string;
  bookId: number;
}

interface CommentsState {
  data: Comment[];
  isLoading: boolean;
  error: SerializedError | null;
}

const initialState: CommentsState = {
  data: [],
  isLoading: false,
  error: null,
};

const CommentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const selectComments = (state: RootState) => state.comments;
export default CommentsSlice.reducer;
