import { useFetchcommentsQuery } from "./commentsApi";

export default function Comments({ bookId }: { bookId: number }) {
  const { data, isLoading, error } = useFetchcommentsQuery(bookId);

  if (isLoading) {
    return (
      <div className="flex w-full justify-center">Loading fetching data...</div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full justify-center">Error fetching data...</div>
    );
  }

  return (
    <div className="m-2">
      {data.map((comment: BookComment) => (
        <div
          key={comment.id}
          className="flex items-center h-8 my-1 mx-4 pl-2 xl:pl-6 text-md xl:text-xl">
          {comment.comment}
        </div>
      ))}
    </div>
  );
}
