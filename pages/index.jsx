import Head from 'next/head';
import NavbarContainer from '../components/NavbarContainer';
import PrincipalBanner from '../components/PrincipalBanner';
import NextTip from '../components/NextTip';
import JavascriptTip from '../components/JavascriptTip';
import Knowledge from '../components/Knowledge';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => (
    <div className="relative overflow-hidden">
        <Head>
            <title>FP | React Developer</title>
            <link rel="icon" href="/white.png" />
        </Head>
        <NavbarContainer />
        <PrincipalBanner />
        <Knowledge />
        <NextTip />
        <Experiences />
        <JavascriptTip />
        <Skills />
        <NextTip />
        <About />
        <Contact />
    </div>
);

export default Index;
