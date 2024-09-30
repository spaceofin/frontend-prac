export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center m-5 my-10 p-10 border border-gray-500 rounded-md w-1/2">
      {children}
    </div>
  );
};
