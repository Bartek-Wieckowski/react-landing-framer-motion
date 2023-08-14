import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import {landingSettings, homeContetObj} from "./utils/data-settings";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="app">
      <Header webinarTitle={landingSettings.title} webinarDate={landingSettings.date} />

      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home homeContent={homeContetObj}/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
