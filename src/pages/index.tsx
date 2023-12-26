// pages/Home.tsx
import HomeBanner from "@/components/HomePage/Banner";
import OurService from "@/components/HomePage/OurService";
import React from "react";
import Contact from "./contact";


const Home = () => {
  return (
    <div >
      
      <HomeBanner/>
      <OurService/>
      
    </div>
  );
};

export default Home;
