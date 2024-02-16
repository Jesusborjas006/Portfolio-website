import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { useState } from "react";

function App() {
  const [, setSelectedProject] = useState(0);

  return (
    <main id="home" className="bg-[#F1F2F4]">
      <Routes>
        <Route
          path="/"
          element={<Home setSelectedProject={setSelectedProject} />}
        />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </main>
  );
}

export default App;
