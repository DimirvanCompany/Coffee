import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import Section1 from "../../components/sections/Section1/Section1";
import Section2 from "../../components/sections/section2/Section2";
import Section3 from "../../components/sections/Section3/Section3";
import Section4 from "../../components/sections/section4/Section4";
import "./HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";
function HomePage() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}

export default HomePage;
