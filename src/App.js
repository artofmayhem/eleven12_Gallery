import "./App.css";

// Dashboard component imports
import { Nav, Header, Form } from "./Components";

function App() {
  return (
    <div className="App bg-violet-800 text-white">
      <Nav />
      <Header />
      <Form />
    </div>
  );
}

export default App;
