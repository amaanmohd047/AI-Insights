import FeaturesSection from "./components/Solutions/FeatureSection";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Benefits from "./components/Benefits/Benefits";
// import Test from "./components/ui/Test";

function App() {
  return (
    <div
      className="w-[100vw] font-sans antialiased h-[200vh] text-slate-800 relative scroll-smooth  snap-y snap-mandatory"
      id="smooth-wrapper"
    >
      <div id="smooth-content">
        <Navbar />
        <Home />
        <FeaturesSection />
        <HowItWorks />
        <Benefits />
      </div>
    </div>
  );
}

export default App;
