import Bottomheader from "./components/Bottomheader";
import Donotmiss from "./components/Miss";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Gearup from "./components/Gearup";
import Hero from "./components/Hero";
import Shoes from "./shoes/page";

export default function Home() {
  return (
    <div>
    
      <Bottomheader />
      <Hero />
      <Shoes />
      <Feature /> 
      <Gearup />
      <Donotmiss />
      <Footer/>
    </div>
  
  );
}
