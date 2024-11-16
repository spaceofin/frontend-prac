import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchSections, selectSections } from "./sectionsSlice";

export default function SectionsList() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(selectSections);

  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading fetching data...</div>;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return (
    <>
      {isLoading && <div>Loading fetching data...</div>}
      {error && <div>Error fetching data...</div>}
      {!isLoading && !error && (
        <div className="grid grid-cols-3">
          {data.map((section) => (
            <div
              key={section.id}
              className="flex items-center w-60 my-4 mx-8 p-2 pl-6 bg-white  rounded-md cursor-pointer text-xl border-4 border-double border-gray-700">
              {section.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
