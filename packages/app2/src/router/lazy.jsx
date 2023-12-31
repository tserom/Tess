import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomePage from "../pages/home";

// import AboutPage from "../pages/about";

const AboutPage = lazy(() => import("../pages/about"));
const NamePage = lazy(() => import("../pages/name"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<>...</>}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/name"
          element={
            <Suspense fallback={<>...</>}>
              <NamePage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
