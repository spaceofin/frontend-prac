export default function Comment({
  comment,
  commentId,
  bookId,
  handleDelComment,
}: {
  comment: string;
  commentId: number;
  bookId: number;
  handleDelComment: (commentId: number) => void;
}) {
  return (
    <div className="flex w-full justify-between items-center">
      <div>{comment}</div>
      <button
        className=" bg-red-600 bg-opacity-70 text-sm text-slate-800 px-2 h-6 rounded-md"
        onClick={() => handleDelComment(commentId)}>
        DEL
      </button>
    </div>
  );
}
