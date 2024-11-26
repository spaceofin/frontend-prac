import { useState } from "react";

export default function Comment({
  comment,
  commentId,
  handleDelComment,
  handleSaveComment,
}: {
  comment: string;
  commentId: number;
  handleDelComment: (commentId: number) => void;
  handleSaveComment: ({
    commentId,
    newComment,
  }: {
    commentId: number;
    newComment: string;
  }) => void;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(comment);

  const handleSaveClick = () => {
    setIsEditing(false);
    handleSaveComment({ commentId, newComment: editValue });
  };

  return (
    <div className="flex w-full justify-between items-center">
      {isEditing ? (
        <>
          <input
            className="flex w-full mr-14 pl-2 bg-gray-300 rounded-md"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button
            className=" bg-green-500 bg-opacity-70 text-sm text-slate-800 px-2 h-6 rounded-md"
            onClick={handleSaveClick}>
            SAVE
          </button>
        </>
      ) : (
        <>
          <div>{comment}</div>
          <div>
            <button
              className=" bg-blue-500 bg-opacity-70 text-sm text-slate-800 px-2 h-6 mr-1 rounded-md"
              onClick={() => setIsEditing(true)}>
              EDIT
            </button>
            <button
              className=" bg-red-600 bg-opacity-70 text-sm text-slate-800 px-2 h-6 rounded-md"
              onClick={() => handleDelComment(commentId)}>
              DEL
            </button>
          </div>
        </>
      )}
    </div>
  );
}
