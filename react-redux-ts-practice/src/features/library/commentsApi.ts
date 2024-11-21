import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentsApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100",
  }),
  tagTypes: ["Comment"],
  endpoints(builder) {
    return {
      fetchcomments: builder.query<BookComment[], number>({
        providesTags: (result, error, bookId) => {
          return [{ type: "Comment", id: bookId }];
        },
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
      addComment: builder.mutation({
        invalidatesTags: (result, error, { bookId, comment }) => {
          return [{ type: "Comment", id: bookId }];
        },
        query: ({ bookId, comment }) => {
          return {
            method: "POST",
            url: "/comments",
            body: {
              bookId: bookId,
              comment: comment,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchcommentsQuery, useAddCommentMutation } = commentsApi;
export { commentsApi };
