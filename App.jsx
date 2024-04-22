import "./App.css";
import Navbar from "./Component/Navbar";
import ContextProvider from "./Store/Context";
import Comp2des from "./Component/Comp2des";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
// import NewExploreitem from "./Component/NewExploreItem";
//
// import NewCard from "./Component/NewCard";

function App() {
  return (
    <>
      {/* <MyComponent></MyComponent> */}
      <ContextProvider>
        {/* <Comp2des></Comp2des> */}
        {/* <NewCard /> */}
        <Navbar />
        {/* <NewExploreitem /> */}
        <Outlet />
        {/* <FigmaTemplates /> */}
      </ContextProvider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
