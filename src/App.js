import './App.css';
import { useState } from 'react';  

const initialStates = {
  userName: "John",
  password: "XTC93"
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
    console.log("3. User: ", user);
  }
  



  return (
    <div className="App bg-zinc-600 text-white">
     <h1>ELEVN12</h1>
      <h2>Login</h2>
      <form>
        <label>User Name:</label>
        <input className="text-black" type="text" name="userName" value={user.userName} onChange={handleChange} />
        <label>Password:</label>
        <input className="text-black" type="password" name="password" value={user.password} onChange={handleChange} />
        <button>Login</button>
      </form>
     </div>
  );
}

export default App;
