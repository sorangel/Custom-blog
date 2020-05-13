import React from "react";
import "./styles.css";
import Card from "../IU/Card";
import Logo from "../Logo";
import Navbar from "../Navbar";

const Hero = (props) => {
  return (
    <Card>
      <div style={{ padding: "50px 0" }}>
        <Logo />
        <Navbar />
      </div>
    </Card>
  );
};

export default Hero;
