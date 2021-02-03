import React from 'react';
import Head from 'next/head';
import NavbarContainer from '../components/NavbarContainer';

const Index = () => (
    <div className="bg-indigo-1000">
        <Head>
            <title>Felix Pacheco | Front-End Developer</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarContainer />
    </div>
);

export default Index;
