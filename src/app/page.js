import Image from "next/image";
import Home from "./Components/Home/Home";
import { TimelineDemo } from "./Components/Gallery/Gallery";
import MahalSection from "./Components/MahalSection/MahalSection";
import { AnimatedPinDemo } from "./Components/Location/Location";
import Footer from "./Components/Footer/Footer";

export default function Page() {
  return (
    <div>
      <Home />
      <TimelineDemo />
      <MahalSection />
      <AnimatedPinDemo />
      <Footer />
    </div>
  );
}
