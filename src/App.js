import './App.css';
import React, {useState} from "react";

//Importing all the React components
import Header from "./components/Header";
//Nav is part of the Header Component
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About></About>;
      case "portfolio":
        return <Portfolio></Portfolio>;
      case "contact":
        return <Contact></Contact>;
      case "resume":
        return <Resume></Resume>;
      default:
        return null;
    }
  }

  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      <main>
        {renderTab()}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
