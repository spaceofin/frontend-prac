export default function SearchBar({
  title,
  inputValue,
  onInputChange,
  placeholder,
  buttonLabel,
  onButtonClick,
}: {
  title: string;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  buttonLabel: string;
  onButtonClick: () => void;
}) {
  return (
    <>
      <div className="flex w-full justify-center text-4xl font-bold">
        {title}
      </div>
      <div className="flex w-2/3 justify-center items-center">
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder={placeholder}
          className="flex flex-grow my-5 mr-1 text-xl rounded-md border-4 border-green-800 px-2"
        />
        <button
          onClick={onButtonClick}
          className="h-9 rounded-md bg-amber-400 text-lg px-2 active:scale-95 active:bg-amber-500">
          {buttonLabel}
        </button>
      </div>
    </>
  );
}
