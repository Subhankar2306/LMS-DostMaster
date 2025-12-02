import React from "react";
import Navbar from "../components/Navbar";  
import Banner from "../components/Banner";
import HomeCourse from "../components/HomeCourse";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <HomeCourse />
      <Testimonial />
    </div>
  );
};

export default Home;
