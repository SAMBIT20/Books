import React from "react";
import Nav from "./components/NavBar/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";

const App = () => {
  return (
    <div>
      {/* NAvbar---------------------------------------------- */}
      <Nav />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Library Page */}
        <Route path="/library" element={<Library />} />
      </Routes>

      {/* Footer----------------------------------------------- */}
    </div>
  );
};

export default App;
