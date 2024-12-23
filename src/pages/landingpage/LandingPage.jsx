import React from "react";
import NavBar from "../../components/navbar/NavBar";
import CustomSlider from "../../components/slider/Slider";
import Footer from "../../components/Footer/Footer";
import SmartPhoneCards from "../../components/SmartPhonesCards/SmartPhoneCards";
import styles from "./landingPage.module.css"
import AccessoriesCard from "../../components/Accessories/AccessoriesCard";

const LandingPage = () => {
  return (
    <div className={styles.main}>
      <NavBar />
      <CustomSlider />
      <SmartPhoneCards />
      <AccessoriesCard />
      <Footer />
    </div>
  );
};

export default LandingPage;
