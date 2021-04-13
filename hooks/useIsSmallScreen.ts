import { useState, useEffect } from 'react';

const useIsSmallScreen = (screenBreakPoint: number): boolean => {
    const [width, setWidth] = useState(null);
    const breakPoint = screenBreakPoint || 762;

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return width <= breakPoint;
};

export default useIsSmallScreen;
