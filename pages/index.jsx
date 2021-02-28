import React from 'react';
import Head from 'next/head';
import NavbarContainer from '../components/NavbarContainer';
import PrincipalBanner from '../components/PrincipalBanner';
import NextTip from '../components/NextTip';
import Knowledge from '../components/Knowledge';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';

const Index = () => (
    <div className="relative overflow-hidden">
        <Head>
            <title>Felix Pacheco | Front-End Developer</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarContainer />
        <PrincipalBanner />
        <Knowledge />
        <NextTip />
        <Experiences />
        <Skills />
    </div>
);

export default Index;
