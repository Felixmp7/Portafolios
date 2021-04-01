import Header from '../components/Header';
import NavbarContainer from '../components/NavbarContainer';
import PrincipalBanner from '../components/PrincipalBanner';
import NextTip from '../components/NextTip';
import JavascriptTip from '../components/JavascriptTip';
import CypressTip from '../components/CypressTip';
import Training from '../components/Training';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => (
    <>
        <Header />
        <NavbarContainer />
        <PrincipalBanner />
        <Training />
        <NextTip />
        <Experiences />
        <JavascriptTip />
        <Skills />
        <CypressTip />
        <About />
        <Contact />
        <Footer />
    </>
);

export default Index;
