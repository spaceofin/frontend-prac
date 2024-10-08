import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setUser, changeEmail, changeName, selectUser } from "./userSlice";

export const User = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const { name: userName, email: userEmail } = useAppSelector(selectUser);
  const [isNameSave, setIsNameSave] = useState(false);
  const [isEmailSave, setIsEmailSave] = useState(false);

  const handleSaveClick = () => {
    dispatch(setUser({ name: name, email: email }));
    setIsNameSave(true);
    setIsEmailSave(true);
  };

  const handleEditClick = (type: "name" | "email") => {
    if (type === "name") {
      setIsNameSave(false);
    } else if (type === "email") {
      setIsEmailSave(false);
    }
  };

  const handleEditSaveClick = (type: "name" | "email") => {
    if (type === "name") {
      dispatch(changeName(name));
      setIsNameSave(true);
    } else if (type === "email") {
      dispatch(changeEmail(email));
      setIsEmailSave(true);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-orange-300 font-mono relative">
      <div className="flex w-full justify-center text-4xl font-bold my-5">
        User
      </div>
      <div className="flex w-full">
        <div className="flex flex-col my-5 mb-12 mr-5 pl-24 w-3/4">
          <div className="flex items-center text-3xl h-10">
            <label className="w-28">Name:</label>
            {isNameSave ? (
              <>{userName}</>
            ) : (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-3/4 my-1 mx-1 text-xl rounded-md border-4 border-orange-800 px-2"
              />
            )}
          </div>

          <div className="flex items-center text-3xl h-10">
            <label className="w-28">Email:</label>
            {isEmailSave ? (
              <>{userEmail}</>
            ) : (
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-3/4 my-1 mx-1 text-xl rounded-md border-4 border-orange-800 px-2"
              />
            )}
          </div>
        </div>
        {isNameSave && isEmailSave ? (
          <div className="flex flex-col gap-1 my-5">
            <button
              onClick={() => handleEditClick("name")}
              className="w-24 h-9 bg-orange-500 rounded-xl text-2xl text-white">
              Edit
            </button>
            <button
              onClick={() => handleEditClick("email")}
              className="w-24 h-9 bg-orange-500 rounded-xl text-2xl text-white">
              Edit
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              if (!isNameSave && !isEmailSave) {
                handleSaveClick();
              } else if (!isNameSave) {
                handleEditSaveClick("name");
              } else if (!isEmailSave) {
                handleEditSaveClick("email");
              }
            }}
            className="w-24 h-20 bg-orange-500 my-5 rounded-xl text-2xl text-white">
            SAVE
          </button>
        )}
      </div>
    </div>
  );
};
