export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center m-10 my-5 p-3 border border-gray-500 rounded-md w-1/2">
      {children}
    </div>
  );
};
