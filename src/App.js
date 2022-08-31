import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" exact element={<Home />} />
          <Route path="/pokemon" exact element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
