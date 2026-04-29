import Navbar from "../components/custom-components/Navbar";
import Hero from "../components/custom-components/Hero";
import About from "../components/custom-components/About";
import Works from "../components/custom-components/Works";
import Services from "../components/custom-components/Service";
import Contact from "../components/custom-components/Contact";
import Footer from "../components/custom-components/Footer";
import WhatsAppButton from "../components/custom-components/WhatsAppButton";

export default function Home() {
    return (
        <div className="bg-black pt-16 lg:pt-24">
            <Navbar />
            <Hero />
            <About />
            <Works />
            <Services />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </div>
    )
}