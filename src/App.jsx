import Header from "./components/Header";
import landingSettings from "./utils/data-settings";
function App() {
  return (
    <div className="app">
      <Header webinarTitle={landingSettings.title} webinarDate={landingSettings.date} />
      <div className="container">
        <div>test</div>
      </div>
    </div>
  );
}

export default App;
