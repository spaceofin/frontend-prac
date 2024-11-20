import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentsApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100",
  }),
  endpoints(builder) {
    return {
      fetchcomments: builder.query({
        query: (bookId) => {
          return {
            url: "/comments",
            params: {
              bookId: bookId,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchcommentsQuery } = commentsApi;
export { commentsApi };
