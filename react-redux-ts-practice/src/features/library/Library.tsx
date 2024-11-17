import SectionsList from "./SectionsList";

export default function Library() {
  return (
    <div className="flex flex-col items-center w-full h-96 bg-gray-300 bg-opacity-70 font-mono relative text-lg">
      <div className="flex w-full justify-center text-4xl font-bold my-5">
        Library
      </div>
      <div className="flex items-center h-full">
        <SectionsList />
      </div>
    </div>
  );
}
