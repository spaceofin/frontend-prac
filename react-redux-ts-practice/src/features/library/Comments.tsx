import { useFetchcommentsQuery, useAddCommentMutation } from "./commentsApi";
import { useState } from "react";

export default function Comments({ bookId }: { bookId: number }) {
  const { data, isLoading, error } = useFetchcommentsQuery(bookId);
  const [addComment, addCommentResults] = useAddCommentMutation();
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddComment = (comment: string) => {
    addComment({ bookId, comment });
  };

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
    <>
      <div className="flex mx-4 mb-1">
        <input
          className="flex w-full rounded-md pl-2 text-sm h-6"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-gray-700 text-white px-4 rounded-md ml-2 text-sm"
          onClick={() => handleAddComment(inputValue)}>
          Add
        </button>
      </div>
      <div className="h-18 overflow-y-auto">
        {data?.map((comment: BookComment) => (
          <div
            key={comment.id}
            className="flex items-center h-8 my-1 mx-4 pl-2 xl:pl-6 text-md xl:text-xl">
            {comment.comment}
          </div>
        ))}
      </div>
    </>
  );
}
