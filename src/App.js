import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";

// Dashboard component imports
import { Nav, Header, Form } from "./Components";

function App() {
  return (
    <Router>
      <div className="App bg-violet-800 text-white">
        <Nav />
        <Header />
        <Form />
      </div>
    </Router>
  );
}

export default App;
