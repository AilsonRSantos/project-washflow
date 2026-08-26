import Navigation from "./components/navbar/navBar";
import SideBar from "./components/sidebar/sidebar";
import PageLogin from "./pages/login/login";
import "./App.css";
import DashbordContainer from "./components/dashcontainer/dashborddcontainer";

function App() {
  return (
    <>
      <div className="sideBar">
        <SideBar />
        <div className="rightSide">
          <div className="navBar">
            <Navigation />
          </div>
          <div className="main">
            <DashbordContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
