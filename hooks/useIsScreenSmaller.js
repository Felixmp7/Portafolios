import { useState, useEffect } from 'react';

const useIsScreenSmaller = (screenBreakPoint) => {
    const [width, setWidth] = useState(null);
    const breakPoint = screenBreakPoint || 600;

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return width <= breakPoint;
};

export default useIsScreenSmaller;
