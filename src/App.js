import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default App;
