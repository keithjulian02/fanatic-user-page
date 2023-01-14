import React from "react";

// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Faq from "../components/Sections/Faq";

//Styles
import "../style/index.css";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Pricing />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
}


