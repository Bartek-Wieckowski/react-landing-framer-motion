import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { landingSettings, webinarContentTop, webinarContentBottom } from "./utils/data-settings";
import Header from "./components/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Thanks from "./pages/Thanks";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="app">
      <Header webinarTitle={landingSettings.title} webinarDate={landingSettings.date} />

      <div className="container">
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/about"
                element={
                  <About webinarContentTop={webinarContentTop} webinarContentBottom={webinarContentBottom} />
                }
              ></Route>
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
