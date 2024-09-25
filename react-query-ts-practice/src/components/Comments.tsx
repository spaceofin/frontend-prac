import { useGetComments, useGetInfiniteComments } from 'hooks/useComments';
import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react';

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

function DisplayComments({ comments }: { comments: Comment[] }) {
  return (
    <>
      {comments.map((comment: Comment) => (
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
  );
}

export function Comments() {
  const [inputValue, setInputValue] = useState<number>(1);
  const [searchPostId, setSearchPostId] = useState<number>(1);
  const [allButtonClicked, setAllButtonClicked] = useState(true);

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, error } =
    useGetInfiniteComments();

  const { data: postCommentsData } = useGetComments(searchPostId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error && error.message}</div>;
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
            max="100"
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
          {data?.pages.map(
            (pageData) =>
              pageData && <DisplayComments key={pageData.nextPage - 1} comments={pageData.data} />,
          )}
        </InfiniteScroll>
      ) : (
        <>{postCommentsData && <DisplayComments comments={postCommentsData} />}</>
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
