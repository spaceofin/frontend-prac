import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

const baseUrl = "http://localhost:3100/books";

export const fetchBooks = createAsyncThunk(
  "books/fetch",
  async (sectionId: number) => {
    const response = await axios.get(`${baseUrl}?sectionId=${sectionId}`);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return response.data;
  }
);

interface Book {
  id: number;
  book: string;
  sectionId: number;
}

interface BooksState {
  data: Book[];
  isLoading: boolean;
  error: SerializedError | null;
}

const initialState: BooksState = {
  data: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const selectBooks = (state: RootState) => state.books;
export default booksSlice.reducer;
