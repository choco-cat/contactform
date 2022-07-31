import React from "react";
import "./assets/scss/app.scss";
import UserForm from "./components/ConactForm";

function App() {
  return (
    <div className="App">
      <header />
      <div className="container">
        <h1>Contact form</h1>
        <UserForm />
      </div>
    </div>
  );
}

export default App;
