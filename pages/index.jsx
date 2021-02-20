import React from 'react';
import Head from 'next/head';
import NavbarContainer from '../components/NavbarContainer';
import PrincipalBanner from '../components/PrincipalBanner';

const Index = () => (
    <div className="relative overflow-hidden">
        <Head>
            <title>Felix Pacheco | Front-End Developer</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarContainer />
        <PrincipalBanner />
    </div>
);

export default Index;
