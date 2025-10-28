import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Highlight from "./components/Highlights";


const Page = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      
      <Header />
     
      <Highlight/>
  
       
    </div>
  );
};

export default Page;
