import {useState} from "react";

function Timer(){
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Нажми меня</button>
            {isVisible && <div>Элемент появился!</div>}
        </div>
    );
}
export default Timer;