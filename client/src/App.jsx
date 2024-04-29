import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <>
      <BrowswerRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowswerRouter>
    </>
  );
}

export default App;
