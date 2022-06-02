import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotel/:id" element={<Hotel />} />
    </Routes>
  );
}

export default App;

// 40:22
//https://www.youtube.com/watch?v=RkWpJ4XUHuw&t=232s
