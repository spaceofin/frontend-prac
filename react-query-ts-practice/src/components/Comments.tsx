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
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ['commentsData'],
      queryFn: ({ pageParam }) => fetchData(pageParam),
      initialPageParam: 1,
      getNextPageParam: (pages) => {
        return pages.length + 1;
      },
      getPreviousPageParam: (pages) => {
        return pages.length - 1;
      },
    });

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>Comments</h1>
      <InfiniteScroll
        loadMore={() => {
          if (!isFetching) {
            fetchNextPage();
          }
        }}
        hasMore={hasNextPage}
      >
        {data &&
          data.pages.map((pageData) =>
            pageData.map((comment: Comment) => (
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
