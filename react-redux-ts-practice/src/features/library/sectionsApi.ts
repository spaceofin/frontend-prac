import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sectionsApi = createApi({
  reducerPath: "sections",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100",
  }),
  endpoints(builder) {
    return {
      fetchSections: builder.query({
        query: () => {
          return {
            url: "/sections",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchSectionsQuery } = sectionsApi;
export { sectionsApi };
