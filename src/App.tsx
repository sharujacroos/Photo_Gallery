import { Routes, Route } from "react-router-dom";
import Home from "./Gallery";
import Details from "./Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photo/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
