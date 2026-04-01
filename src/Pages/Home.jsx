import Navbar from "../components/custome-components/Navbar";
import Hero from "../components/custome-components/Hero";
import About from "../components/custome-components/About";
import Works from "../components/custome-components/Works";
import Services from "../components/custome-components/Service";
import Contact from "../components/custome-components/Contact";
import Footer from "../components/custome-components/Footer";
import WhatsAppButton from "../components/custome-components/WhatsAppButton";

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