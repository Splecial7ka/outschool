import "./App.css";
import { Header } from "./components/header";
import { HeroSection } from "./components/HeroSection";
import { PartnersSection } from "./components/PartnersSection";
import { CardsSection } from "./components/CardsSection";
import { ServicesSection } from "./components/ServicesSection";
import { GirlsSection } from "./components/GirlsSection";
import { NewsSection } from "./components/NewsSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <HeroSection>
        <Header></Header>
      </HeroSection>
      <PartnersSection />
      <CardsSection />
      <ServicesSection />
      <GirlsSection />
      <NewsSection />
      <EmailSection />
      <Footer />
    </>
  );
}

export default App;
