import { useState } from "react";
import Section from "./Section";
import { TbArrowBackUp } from "react-icons/tb";
import { useFetchSectionsQuery } from "./sectionsApi";

export default function SectionsList() {
  const { data, isLoading, error } = useFetchSectionsQuery(null);
  const [sectionId, setSectionId] = useState<number | null>(null);

  const handleBackClick = () => {
    setSectionId(null);
  };

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
                {data.map((section: Section) => (
                  <div
                    key={section.id}
                    onClick={() => setSectionId(section.id)}
                    className="flex items-center w-48 2xl:w-60 my-2 mx-2 2xl:mx-4 p-2 pl-2 2xl:pl-6 bg-white rounded-md cursor-pointer text-md 2xl:text-xl border-4 border-double border-gray-700">
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
