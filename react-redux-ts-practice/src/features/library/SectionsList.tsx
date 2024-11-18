import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchSections, selectSections } from "./sectionsSlice";
import { useState } from "react";
import Section from "./Section";
import { TbArrowBackUp } from "react-icons/tb";

export default function SectionsList() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(selectSections);
  const [sectionId, setSectionId] = useState<number | null>(null);

  const handleBackClick = () => {
    setSectionId(null);
  };

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
        <>
          {sectionId ? (
            <div className="flex flex-col w-full mx-10 mb-10">
              <div
                className="flex justify-end mr-4 mb-2 cursor-pointer"
                onClick={handleBackClick}>
                <TbArrowBackUp size={28} />
              </div>
              <Section sectionId={sectionId} />
            </div>
          ) : (
            <div className="flex h-full w-full justify-center items-center">
              <div className="grid grid-cols-3 h-60">
                {data.map((section) => (
                  <div
                    key={section.id}
                    onClick={() => setSectionId(section.id)}
                    className="flex items-center w-40 xl:w-60 my-2 mx-4 p-2 pl-2 xl:pl-6 bg-white rounded-md cursor-pointer text-md xl:text-xl border-4 border-double border-gray-700">
                    {section.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
