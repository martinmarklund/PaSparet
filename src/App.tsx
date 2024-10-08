import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Game from "./pages/Game";

import "./index.css";

const App: React.FC = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <nav className="mb-4 p-3 flex justify-center">
        <ul className="flex space-x-4">
          <li className="hover:scale-105 transition-transform duration-100">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-100">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-100">
            <Link to="/register">Register</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-100">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-100">
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<Game />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
