import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewBlog from "./NewBlog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-blog" element={<NewBlog />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
