import { useState } from "react";
import Comments from "./Comments";
import { useFetchBooksQuery } from "./booksApi";

export default function Section({ sectionId }: { sectionId: number }) {
  const { data, isLoading, error } = useFetchBooksQuery(sectionId);
  const [bookId, setBookId] = useState<number | null>(null);

  const handleBookClick = (bookId: number) => {
    setBookId(bookId);
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
      {bookId ? (
        <div className="flex flex-col w-full h-52 bg-gray-400 rounded-md py-5">
          <div className="flex justify-center items-center h-18 my-2 mx-4 p-2 pl-2 2xl:pl-6 bg-white rounded-md text-md 2xl:text-xl border-4 border-double border-gray-700">
            {data[0].title}
          </div>
          <Comments bookId={bookId} />
        </div>
      ) : (
        <div className="grid grid-cols-2 h-56 2xl:h-52 bg-gray-400 rounded-md py-5">
          {data.map((book: Book) => (
            <div
              key={book.id}
              onClick={() => handleBookClick(book.id)}
              className="flex items-center h-26 2xl:h-18 my-2 mx-4 p-2 pl-2 2xl:pl-6 bg-white rounded-md cursor-pointer text-md 2xl:text-xl border-4 border-double border-gray-700">
              {book.title}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
