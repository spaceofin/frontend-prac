import { Middleware } from "redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { changeName, changeEmail } from "../features/user/userSlice";

const logUserUpdates: Middleware =
  () => (next) => (action: PayloadAction<string>) => {
    // console.log("middleware run");
    if (changeName.match(action)) {
      const name = action.payload;
      if (name) {
        console.log("Changed name:", name);
      }
    }
    if (changeEmail.match(action)) {
      const email = action.payload;
      if (email) {
        console.log("Changed email:", email);
      }
    }
    return next(action);
  };

export default logUserUpdates;
