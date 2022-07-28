import "./App.css";


// Dashboard component imports
import Nav from "./Components/Nav.js";
import Header from "./Components/Header.js";
import Form from "./Components/Form.js";

function App() {
 

  return (
    <div className="App bg-violet-800 text-white">
      <Nav />
      <Header/>
      <Form />
    </div>
  );
}

export default App;
