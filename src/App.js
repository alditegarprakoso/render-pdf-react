import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Render from "./pages/Render";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/render/:id" element={<Render />} />
      </Routes>
    </>
  )
}

export default App