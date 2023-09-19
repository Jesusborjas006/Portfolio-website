import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import Details from "../pages/Details";

function App() {
  return (
    <main id="home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

    </main>
  );
}

export default App;
