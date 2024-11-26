import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentsApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100",
  }),
  tagTypes: ["Comment", "BookComment"],
  endpoints(builder) {
    return {
      fetchcomments: builder.query({
        providesTags: (result, error, bookId) => {
          const tags = result?.map((comment: BookComment) => ({
            type: "Comment",
            id: comment.id,
          }));
          tags?.push({ type: "BookComment", id: bookId });
          return tags;
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
          return [{ type: "BookComment", id: bookId }];
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
      removeComment: builder.mutation({
        invalidatesTags: (result, error, commentId) => {
          return [{ type: "Comment", id: commentId }];
        },
        query: (commentId) => {
          return {
            method: "DELETE",
            url: `/comments/${commentId}`,
          };
        },
      }),
      editComment: builder.mutation({
        invalidatesTags: (result, error, { commentId, newComment }) => {
          return [{ type: "Comment", id: commentId }];
        },
        query: ({ commentId, newComment }) => {
          return {
            method: "PATCH",
            url: `/comments/${commentId}`,
            body: {
              commentId: commentId,
              comment: newComment,
            },
          };
        },
      }),
    };
  },
});

export const {
  useFetchcommentsQuery,
  useAddCommentMutation,
  useRemoveCommentMutation,
  useEditCommentMutation,
} = commentsApi;
export { commentsApi };
