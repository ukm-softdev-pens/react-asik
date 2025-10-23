import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tugas2 from "./pages/Tugas2";
import Tugas3 from "./pages/Tugas3";

export default function App() {
  return (
    <Router>
      <nav className="flex justify-center items-center gap-4">
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/tugas2">Tugas2</Link>
        <Link to="/tugas3">Tugas3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tugas2" element={<Tugas2 />} />
        <Route path="/tugas3" element={<Tugas3 />} />
      </Routes>
    </Router>
  );
}
