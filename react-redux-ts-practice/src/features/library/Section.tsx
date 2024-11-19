import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchBooks, selectBooks } from "./booksSlice";

export default function Section({ sectionId }: { sectionId: number }) {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchBooks(sectionId));
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div className="flex w-full justify-center">
          Loading fetching data...
        </div>
      )}
      {error && (
        <div className="flex w-full justify-center">
          Error fetching data.....
        </div>
      )}
      {!isLoading && !error && (
        <div className="grid grid-cols-2 h-52 bg-gray-400 rounded-md py-5">
          {data.map((book) => (
            <div
              key={book.id}
              className="flex items-center h-18 my-2 mx-4 p-2 pl-2 xl:pl-6 bg-white rounded-md cursor-pointer text-md xl:text-xl border-4 border-double border-gray-700">
              {book.title}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
