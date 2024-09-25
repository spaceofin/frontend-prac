import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

const url = 'https://jsonplaceholder.typicode.com/comments';

const fetchData = async (pageParam: number) => {
  try {
    const response = await fetch(url + '?_page=' + pageParam);
    const data = await response.json();

    return { data: data, nextPage: pageParam + 1 };
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

export function useGetInfiniteComments() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ['commentsData'],
      queryFn: ({ pageParam }) => fetchData(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage?.nextPage || undefined;
      },
    });
  return { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, error };
}

const fetchPostComments = async (postId: number) => {
  try {
    const response = await fetch(url + '?postId=' + postId);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

export function useGetComments(searchPostId: number) {
  const { data } = useQuery({
    queryKey: ['postCommentsData', searchPostId],
    queryFn: () => fetchPostComments(searchPostId),
  });
  return { data };
}
