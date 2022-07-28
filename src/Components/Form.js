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
      <div className="form-content-block-wt">
        <h2 className="my-10">Please login via the guest portal below</h2>
        <form className=" my-36 border-2 mx-6 py-10">
          <label>User Name:</label>
          <input
            className="text-black w-36 mx-10 my-10 text-center"
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            className="text-black w-36 mx-10 my-10 text-center"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button className="border-2 px-16 py-2" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
