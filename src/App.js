import React from "react";
import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <ContactForm />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
