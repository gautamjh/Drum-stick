// import React, { useState, useEffect } from 'react';
// import bikeImage from './Images/Img_05.png';
// import backgroundImage from './Images/Img_1.png';
// const MovingBike = () => {
//     const [backgroundPosition, setBackgroundPosition] = useState(0);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setBackgroundPosition(prevPosition => prevPosition - 5);
//         }, 20);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []);

//     return (
//         <div
//             style={{
//                 position: 'absolute',
//                 display:'block',
//                 bottom:'0%',
//                 left:'0%',
//                 width: '140px',
//                 height: '500%',
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPositionX: backgroundPosition + 'px'
//             }}
//         >
//             <div
//                 style={{
//                     position: 'absolute',
//                     bottom: '8%',
//                     left: '24%',
//                     transform: 'translate(-50%, -50%)',
//                     width: '100%',
//                     height: '100%',
      
//                     backgroundImage: `url(${bikeImage})`,
                   
//                     backgroundSize: 'cover'
//                 }}
//             ></div>
//        </div>
//     );
// };

// export default MovingBike;

import React from 'react';
import './MovingBike.css'; // Import the CSS file for styling

const MovingBike = () => {
    return (
        <div className="container">
            <div className="car"></div>
        </div>
    );
};

export default MovingBike;
