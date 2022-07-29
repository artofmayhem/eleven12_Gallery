import React, { useState } from "react";
import uuid from "react-uuid";
import initialStates from "../State/initialFormState";

export default function Form() {
  const [user, setUser] = useState(initialStates);
  console.log("1. User: ", user);

  // This helper function is used to give the user a unique id and make a shallow copy of the user object
  const doThatThing = (user, password) => {
    console.log("Hello " + user + " your password is " + password);
    let data = {
      id: uuid(),
      userName: user,
      password: password,
    };
    let shallowCopyData = { ...data };
    console.log("Shallow copy: ", shallowCopyData);
    setUser(shallowCopyData);
    // eslint-disable-next-line
    console.log(
      "Welcome " +
        data.userName +
        " and thank you for registering. Your user ID is : " +
        data.id +
        ". Your password is: " +
        data.password
    );
    console.log({ data });
    return data;
  };

  // This helper function handles input process
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log("2. User: ", user);
  };

  // This helper function handles the submit process
  const handleSubmit = (event) => {
    event.preventDefault();
    doThatThing(user.userName, user.password);
  };

  return (
    <div className="flex justify-center align-center flex-row  bg-violet-800 h-auto">
      <div className="form-content-block-bk flex flex-row flex-wrap justify-center align-center text-white mx-auto" />
      <div className="form-content-block-wt flex flex-col justify-center align-center bg-slate-300">
        <div className="w-1/2 text-xl text-justify self-center mt-16">
          <h4 className="mb-6 text-3xl text-bold">Welcome Home</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <h2 className="mt-16">Please login via the guest portal below</h2>
        <form className=" my-16 w-96 self-center border-2 border-slate-900 mx-6 py-10 text-xl flex flex-col justify-center align-center bg-slate-500">
          <label className="text-white">User Name:</label>
          <input
            className="text-black w-36 mx-10 my-4 text-center self-center"
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
          <label className="text-white">Password:</label>
          <input
            className="text-black w-36 mx-10 my-4 text-center self-center"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button
            className="border-2 px-4 w-36 self-center py-2 bg-gray-400 text-sm"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
