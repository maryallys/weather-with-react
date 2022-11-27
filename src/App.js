import "./styles.css";
import Form from "./Form";
import React from "react";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="row main">
        <Form />
        <Footer />
      </div>
    </div>
  );
}
