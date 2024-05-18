import { AboutMe, Introduce, PortFolio, Resume, Contact } from "./component/main/HomePageComponent";
import { NavigationBar, Footer, AboutMeCard } from "./component/main";

function App() {
  return (
    <div className="App">
      <div className="StickyCard">
        <AboutMeCard />
      </div>
      <div className="WebContent">
        <div className="Navigation">
          <NavigationBar />
        </div>
        <div className="IntroduceSection">
          <Introduce />
        </div>
        <div className="Portfolio">
          <PortFolio />
        </div>
        <div className="AboutMe">
          <AboutMe />
        </div>
        <div className="Resume">
          <Resume />
        </div>
        <div className="Contact">
          <Contact />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
