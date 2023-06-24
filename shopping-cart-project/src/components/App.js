import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;
