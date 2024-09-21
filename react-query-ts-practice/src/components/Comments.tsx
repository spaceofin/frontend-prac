import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export function Comments() {
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

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ['commentsData'],
      queryFn: ({ pageParam }) => fetchData(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage?.nextPage || undefined;
      },
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>Comments</h1>
      {isFetching && <div>Fetching...</div>}
      <InfiniteScroll
        loadMore={() => {
          if (!isFetching) {
            fetchNextPage();
          }
        }}
        hasMore={hasNextPage}
      >
        {data &&
          data.pages.map(
            (pageData) =>
              pageData &&
              pageData.data.map((comment: Comment) => (
                <div key={comment.id}>
                  <div
                    style={{
                      border: '1px solid black',
                      borderRadius: '2px',
                      margin: '10px',
                      padding: '10px',
                    }}
                  >
                    <>postId: {comment.postId}</>
                    <br />
                    <>name: {comment.name}</>
                    <> / email: {comment.email}</>
                    <br />
                    <br />
                    <strong>Comment</strong>
                    <div>{comment.body}</div>
                  </div>
                </div>
              )),
          )}
      </InfiniteScroll>
      {/* <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage}
        style={{ marginLeft: '10px', marginBottom: '30px', padding: '5px 30px', fontSize: '18px' }}
      >
        Load Next Page
      </button> */}
    </div>
  );
}
