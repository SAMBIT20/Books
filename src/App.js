import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Read from "./pages/ReadPage/Read";
import NewNav from "./components/NavBar/NewNav";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import ChatBoat from "./components/ChatBoat/ChatBoat";
import Errorpage from "./pages/404page/404page";
import Academic from "./pages/Academic/Academic";

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>

      {/* Footer----------------------------------------------- */}
      <ChatBoat />
      <Footer />
    </div>
  );
};

export default App;
