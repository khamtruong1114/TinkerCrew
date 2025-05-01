import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import About from "./pages/About";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
