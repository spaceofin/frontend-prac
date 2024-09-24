import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react';

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export function Comments() {
  const [inputValue, setInputValue] = useState<number>(1);
  const [searchPostId, setSearchPostId] = useState<number>(1);
  const [allButtonClicked, setAllButtonClicked] = useState(true);

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

  const fetchPostComments = async (postId: number) => {
    try {
      const response = await fetch(url + '?postId=' + postId);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const { data: postCommentsData } = useQuery({
    queryKey: ['postCommentsData', searchPostId],
    queryFn: () => fetchPostComments(searchPostId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleAllButtonClick = () => {
    setAllButtonClicked(true);
  };

  const handleSearchButtonClick = () => {
    setAllButtonClicked(false);
    setSearchPostId(inputValue);
  };

  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>Comments</h1>
      {isFetching && <div>Fetching...</div>}
      <div style={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
        <button onClick={handleAllButtonClick} style={{ fontSize: '16px', padding: '0px 7px' }}>
          ALL
        </button>
        <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontSize: '18px',
              backgroundColor: 'skyblue',
              padding: '0px 7px',
              margin: '0px 3px 0px 5px',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            POST ID
          </span>
          <input
            type="number"
            min="1"
            max="20"
            value={inputValue}
            onChange={(e) => {
              setInputValue(Number(e.target.value));
            }}
            style={{ width: '50px', fontSize: '16px' }}
          />
          <button
            onClick={handleSearchButtonClick}
            style={{ fontSize: '16px', padding: '0px 7px', marginLeft: '2px' }}
          >
            Search
          </button>
        </div>
      </div>
      {allButtonClicked ? (
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
      ) : (
        <>
          {postCommentsData &&
            postCommentsData.map((comment: Comment) => (
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
            ))}
        </>
      )}
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
