import React from 'react';
import Head from 'next/head';
import NavbarContainer from '../components/NavbarContainer';
import PrincipalBanner from '../components/PrincipalBanner';
import NextTip from '../components/NextTip';
import Knowledge from '../components/Knowledge';

const Index = () => (
    <div className="relative overflow-hidden">
        <Head>
            <title>Felix Pacheco | Front-End Developer</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarContainer />
        <PrincipalBanner />
        <NextTip />
        <Knowledge />
    </div>
);

export default Index;
