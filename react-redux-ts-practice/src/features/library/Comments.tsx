import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchComments, selectComments } from "./commentsSlice";

export default function Comments({ bookId }: { bookId: number }) {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(selectComments);

  useEffect(() => {
    dispatch(fetchComments(bookId));
  }, [dispatch]);

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
      {data.map((comment) => (
        <div
          key={comment.id}
          className="flex items-center h-8 my-1 mx-4 pl-2 xl:pl-6 text-md xl:text-xl">
          {comment.comment}
        </div>
      ))}
    </div>
  );
}
