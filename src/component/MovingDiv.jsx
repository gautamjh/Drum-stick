import React, { useState, useEffect } from 'react';

const MovingDiv = () => {
    const [isMoving, setIsMoving] = useState(false);
    const [leftPosition, setLeftPosition] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isMoving) {
                setLeftPosition(prevLeftPosition => prevLeftPosition + 5);
            }
        }, 10);

        return () => {
            clearInterval(intervalId);
        };
    }, [isMoving]);

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            setIsMoving(prevIsMoving => !prevIsMoving);
        }
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: leftPosition + 'px',
                width: '100px',
                height: '100px',
                backgroundColor: 'red'
            }}
            onKeyPress={handleKeyPress}
            tabIndex="0"
        ></div>
    );
};

export default MovingDiv;
