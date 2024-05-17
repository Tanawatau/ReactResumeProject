import { NavigationBar } from "./component/main/navagitonbar";

function App() {
  return (
    <div className="App">
      <div className="Navigation">
        <NavigationBar />
      </div>
      <div className="IntroduceSection"></div>
      <div className="Portfolio"></div>
      <div className="AboutMe"></div>
      <div className="Resume">
        <div className="EducationExp"></div>
        <div className="WorkExp"></div>
        <div className="ToolsAndLanguage"></div>
      </div>
      <div className="Contact"></div>
      <div className="Footer"></div>
    </div>
  );
}

export default App;
