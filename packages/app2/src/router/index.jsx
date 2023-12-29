import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/home";
import AboutPage from "../pages/about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
