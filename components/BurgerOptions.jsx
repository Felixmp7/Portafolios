/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';

const BurgerOptions = ({ navbarItems, setIsOpen, isOpen }) => (
    <Container
        isOpen={isOpen}
        className="top-0 flex justify-end w-full h-full bg-modal"
    >
        <div
            isOpen={isOpen}
            className="top-0 flex flex-col w-2/3 h-full bg-white border-l-8 border-indigo-900 mobileXs:w-1/2 mobile:w-1/3"
        >
            <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-end h-24 pr-5 text-4xl font-bold text-black"
            >
                X
            </button>
            {navbarItems.map((item, index) => (
                <NavbarItem key={index} title={item} />
            ))}
        </div>
    </Container>
);

BurgerOptions.propTypes = {
    navbarItems: PropTypes.instanceOf(Array).isRequired,
    setIsOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default BurgerOptions;

const Container = styled.div`
    position: absolute;
    right: ${({ isOpen }) => (isOpen ? '0px' : '-100vw')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0.5)};
    transition: all .5s ease;
`;
