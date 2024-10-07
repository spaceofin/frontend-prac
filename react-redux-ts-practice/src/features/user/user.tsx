import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setUser, changeEmail, changeName, selectUser } from "./userSlice";

export const User = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const { name: userName, email: userEmail } = useAppSelector(selectUser);
  const [isSave, setIsSave] = useState(false);

  const handleSaveClick = () => {
    dispatch(setUser({ name: name, email: email }));
    setIsSave(true);
  };

  const handleChangeClick = () => {};

  return (
    <div className="flex flex-col items-center w-full bg-orange-300 font-mono relative">
      <div className="flex w-full justify-center text-4xl font-bold my-5">
        User
      </div>
      {isSave ? (
        <div className="flex w-full">
          <div className="flex flex-col my-5 mb-12 mr-5 pl-24 w-3/4">
            <div className="flex items-center text-3xl h-10">
              <label className="w-28">Name:</label>
              {name}
            </div>
            <div className="flex items-center text-3xl h-10">
              <label className="w-28">Email:</label>
              {email}
            </div>
          </div>
          <button
            onClick={handleChangeClick}
            className="w-24 h-24 bg-orange-500 my-3 rounded-xl text-2xl text-white">
            Change
          </button>
        </div>
      ) : (
        <div className="flex w-full">
          <div className="flex flex-col my-5 mb-12 mr-5 pl-24 w-3/4">
            <div className="flex items-center text-3xl h-10">
              <label className="w-28">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-3/4 ml-8 my-1 mx-1 text-xl rounded-md border-4 border-orange-800 px-2"
              />
            </div>
            <div className="flex items-center text-3xl h-10">
              <label className="w-28">Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ml-8 w-3/4 my-1 mx-1 text-xl rounded-md border-4 border-orange-800 px-2"
              />
            </div>
          </div>
          <button
            onClick={handleSaveClick}
            className="w-24 h-24 bg-orange-500 my-3 rounded-xl text-2xl text-white">
            SAVE
          </button>
        </div>
      )}
    </div>
  );
};
