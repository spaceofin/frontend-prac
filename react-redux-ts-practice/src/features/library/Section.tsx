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
      {isLoading && <div>Loading fetching data...</div>}
      {error && <div>Error fetching data...</div>}
      {!isLoading && !error && (
        <div className="grid grid-cols-3">
          {data.map((book) => (
            <div
              key={book.id}
              className="flex items-center w-40 xl:w-60 my-2 mx-4 p-2 pl-2 xl:pl-6 bg-white rounded-md cursor-pointer text-md xl:text-xl border-4 border-double border-gray-700">
              {book.book}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
