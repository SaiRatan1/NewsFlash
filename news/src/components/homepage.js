import React from "react";
import Catnews from "./catnews";
import Footer from "./footer";

const Homepage = () => {
  const cat = ["finance", "sports", "weather", "entertainment"];

  return (
    <>
      { cat && cat.map((cat, index) => {
        return (<Catnews index={index+1} type={cat} />)
      })}
      <Footer/>
    </>
  );
};

export default Homepage;
