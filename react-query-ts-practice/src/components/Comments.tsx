import { useQuery } from '@tanstack/react-query';

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export function Comments() {
  const url = 'https://jsonplaceholder.typicode.com/comments';

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['commentsData'],
    queryFn: () => fetchData(url),
  });

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 style={{ marginLeft: '10px' }}>Comments</h1>
      {data.map((comment: Comment) => (
        <div key={comment.id}>
          <div
            style={{
              border: '1px solid black',
              borderRadius: '2px',
              margin: '10px',
              padding: '5px',
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
    </div>
  );
}
