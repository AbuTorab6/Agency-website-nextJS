import React from "react";

import Hero from "@/components/Hero";
import Brand from "@/components/Brand";
import Count from "@/components/Count";
import HowWork from "@/components/HowWork";
import FeatureProject from "@/components/FeatureProject";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import Services from "@/components/Services";
import AllProject from "@/components/AllProject";
import Testimonail from "@/components/Testimonail";
import MyLoader from "@/components/MyLoader";

const page = () => {
  return (
    <>
      <Hero />
      <Brand />
      <HowWork />
      <Count />
      <FeatureProject />
      <Contact />
    </>
  );
};

export default page;
