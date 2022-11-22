import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Navbar/>

      <div className="flex">
      <Sidebar/>
      <Home/>
      </div>
    </div>
  );
};

export default App;