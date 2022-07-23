import './App.css';
import { useState } from 'react';  

const initialStates = {
  userName: "John",
  password: "Wick"
}

function App() {

  const [user, setUser] = useState(initialStates);
  console.log("1. User: ", user);

  const handleChange= (event) => {
    const { name, value} = event.target;
    setUser({...user, [name]: value});
    console.log("2. User: ", user);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("3. User: ", user.userName);
    console.log("4. Password: ", user.password);
    console.log("Hello " + user.userName + " your password is " + user.password);
  }
  

  return (
    <div className="App bg-zinc-600 text-white">
     <h1 className="text-9xl">ELEVN12</h1>
      <h2 className="my-10">Please login via the guest portal below</h2>
      <form className="form-container my-2">
        <label>User Name:</label>
        <input className="text-black w-36 mx-10 my-10 text-center" type="text" name="userName" value={user.userName} onChange={handleChange} />
        <label>Password:</label>
        <input className="text-black w-36 mx-10 my-10 text-center" type="password" name="password" value={user.password} onChange={handleChange} />
        <button className="border-2 px-16 py-2" onClick={handleSubmit}>Login</button>
      </form>
     </div>
  );
}

export default App;
