import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { landingSettings } from "./utils/data-settings";
import Header from "./components/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Thanks from "./pages/Thanks";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const availablePaths = ["/", "/about", "/registration", "/thanks"];
  const currentPath = window.location.pathname;
  const isKnownRoute = availablePaths.includes(currentPath);

  return (
    <div className="app">
      {isKnownRoute && <Header webinarTitle={landingSettings.title} webinarDate={landingSettings.date} />}

      <div className="container">
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
              <Route path="/thanks" element={<Thanks />}></Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
