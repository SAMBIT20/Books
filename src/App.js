import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Read from "./pages/ReadPage/Read";
import NewNav from "./components/NavBar/NewNav";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      {/* NAvbar---------------------------------------------- */}
      <NewNav />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Library Page */}
        <Route path="/library" element={<Library />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>

      {/* Footer----------------------------------------------- */}
      <Footer />
    </div>
  );
};

export default App;
