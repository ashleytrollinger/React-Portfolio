import './App.css';
import React from "react";

//Importing all the React components
import Header from "./components/Header";
//Nav is part of the Header Component
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <footer></footer>
    </div>
  )
}

export default App;
