import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100",
  }),
  endpoints(builder) {
    return {
      fetchBooks: builder.query({
        query: (sectionId) => {
          return {
            url: `/books`,
            params: {
              sectionId: sectionId,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchBooksQuery } = booksApi;
export { booksApi };
