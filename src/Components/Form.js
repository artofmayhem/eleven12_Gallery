import React, { useState } from "react";
import uuid from "react-uuid";

// This can be refactored later and imported into the App.js file
const initialStates = {
    userName: "",
    password: "",
  };


export default function Form() {
    
    const [user, setUser] = useState(initialStates);
    console.log("1. User: ", user);
  
  
  // This helper function is user to place 
    const doAThing = (user, password) => {
      console.log("Hello " + user + " your password is " + password);
      let data = {
        id: uuid(),
        userName: user,
        password: password,
      }; 
      let shallowCopyData = {...data};
      console.log("Shallow copy: ", shallowCopyData);
      let copySlicer = shallowCopyData["id"];
      console.log("Copy Slicer: ", copySlicer);
       // eslint-disable-next-line
      console.log("Welcome " + data.userName + ". " + "Your user ID is : " + data.id + ". Your password is: " + data.password); 
      console.log({data});
      return data
    }
  
  // This helper function handles input process
    const handleChange = (event) => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
      console.log("2. User: ", user);
    };
  
  // This helper function handles the submit process
    const handleSubmit = (event) => {
      event.preventDefault();
      doAThing(user.userName, user.password);
    };
    
    return (
        <div className="flex justify-center align-center flex-column form-container bg-violet-800 my-10">
              <h2 className="my-10">Please login via the guest portal below</h2>
          <form className=" my-2">
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
    )
}