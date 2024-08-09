import Navbar from "../../components/navbar/Navbar";
import Section1 from "../../components/sections/Section1/Section1";
import Section2 from "../../components/sections/section2/Section2";
import Section3 from "../../components/sections/Section3/Section3";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default HomePage;
