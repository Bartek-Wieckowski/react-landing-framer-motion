import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { landingSettings } from "./utils/data-settings";
import Header from "./components/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Thanks from "./pages/Thanks";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const availablePaths = ["/react-landing-framer-motion", "/react-landing-framer-motion/about", "/react-landing-framer-motion/registration", "/react-landing-framer-motion/thanks"];
  const currentPath = window.location.pathname;
  const isKnownRoute = availablePaths.includes(currentPath);

  return (
    <div className="app">
      {isKnownRoute && <Header webinarTitle={landingSettings.title} webinarDate={landingSettings.date} />}

      <div className="container">
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/react-landing-framer-motion" element={<Home />}></Route>
              <Route path="/react-landing-framer-motion/about" element={<About />}></Route>
              <Route path="/react-landing-framer-motion/registration" element={<Registration />}></Route>
              <Route path="/react-landing-framer-motion/thanks" element={<Thanks />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
