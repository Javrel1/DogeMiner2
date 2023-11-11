// import React, { useState } from 'react';
// import pick from '../resources/pick.png';
// const Timer = () => {
//     const [rotation, setRotation] = useState(0);
//
//     const handleMouseDown = () => {
//         setRotation(rotation + 90);
//     };
//
//     const handleMouseUp = () => {
//         setRotation(0);
//     };
//
//     const imageStyle = {
//         , // Устанавливаем точку вращения в нижнюю часть изображения
//         transform: `rotate(${rotation}deg)`,
//         transition: 'transform 0.3s ease',
//     };
//
//     return (
//         <img
//             src={pick} // Укажите путь к вашей картинке
//             alt="Rotatable Image"
//             style={imageStyle}
//             onMouseDown={handleMouseDown}
//             onMouseUp={handleMouseUp}
//         />
//     );
// };
//
// export default Timer;