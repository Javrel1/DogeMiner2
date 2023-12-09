import style from './style.module.css';
import pick from '../../resources/pick.png'
import dog from '../../resources/dog.png'
import {useSelector, useDispatch} from "react-redux"
import {increment} from "../../store/reducer.jsx"
import ground from '../../resources/ground.png';
import locked from '../../resources/locked.png';
import {useEffect, useState} from "react";
import * as React from 'react';
import First from "../../shop/First/First";
import Second from "../../shop/Second/Second";
import Third from "../../shop/Third/Third";
import UpFirst from "../../upgrade/UpFirst/UpFirst";
import UpSecond from "../../upgrade/UpSecond/UpSecond";
import UpThird from '../../upgrade/UpThird/UpThird';
import { motion } from "framer-motion"
import mars from '../../resources/mars.png';
import moon from '../../resources/moon.png';
import earth from '../../resources/earth.png';
import neptune from '../../resources/neptune.png';
import { Link } from "react-router-dom";

function Earth() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    const [isFirst, setFirst] = useState(false);

    const [droppedImages, setDroppedImages] = useState([]);

    const [timers, setTimers] = useState([]);

    const [rotation, setRotation] = useState(0);
    const reader = new FileReader();


    useEffect(() => {

        const interval = setInterval(() => {

            setTimers((prevTimers) =>
                prevTimers.map((timer) => {
                    if (timer.running) {
                        const newSeconds = timer.seconds + 1;

                        if (newSeconds === 5){
                            dispatch(increment)
                        }
                        if (newSeconds === 10){
                            dispatch(increment)
                        }
                        if (newSeconds === 15){
                            dispatch(increment)
                        }
                        if (newSeconds === 20){
                            dispatch(increment)
                        }
                        if (newSeconds === 25){
                            dispatch(increment)
                        }
                        if (newSeconds === 30){
                            dispatch(increment)
                        }
                        if (newSeconds === 35){
                            dispatch(increment)
                        }
                        if (newSeconds === 40){
                            dispatch(increment)
                        }
                        if (newSeconds === 45){
                            dispatch(increment)
                        }
                        if (newSeconds === 50){
                            dispatch(increment)
                        }
                        if (newSeconds === 55){
                            dispatch(increment)
                        }
                        if (newSeconds === 60){
                            dispatch(increment)
                        }

                        if (newSeconds >= 60) {
                            return {...timer, seconds: 0};
                        } else {
                            return {...timer, seconds: newSeconds};
                        }
                    }
                    return timer;
                })
            )
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [])


    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    };
    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;

        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImage = reader.result;
                setDroppedImages((prevImages) => [...prevImages, newImage]);

            };
            reader.readAsDataURL(files[i]);
        }
        setTimers((prevTimers) => [
            ...prevTimers,
            {id: Date.now(), seconds: 0, running: true}
        ]);
    };

    const [isShop, setShop] = useState(true);

    const imageStyle = {
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.1s ease',
        transformOrigin: 'bottom center'
    }
    return (
        <div className={style.container}>
            <div onDragOver={handleDragOver} onDrop={handleDrop} id="game" className={style.game1}>
                {(
                    droppedImages.map((image, index) => (
                        <motion.img whileHover={{scale: 1.2}}
                                    dragConstraints={{left: -235, top: -330, right: 250, bottom: 330}} draggable={false}
                                    drag src={image} style={{width: '80px', height: '80px', position: 'absolute'}}
                                    alt={`${index + 1}`}/>
                    ))
                )}
                <div draggable={false} className={style.count}>
                    <div className={style.countBox}>
                        {count}
                    </div>
                    <div className={style.goldBox}>
                        <img draggable={false} className={style.gold}
                             src={'https://cdn-icons-png.flaticon.com/128/138/138540.png'}/>
                    </div>
                </div>
                <div className={style.dogHolder}>
                    <div id={'ground'} className={style.Gground}>
                        <div className={style.groundBlock}>
                            <img draggable={false} src={ground}/>
                        </div>
                    </div>
                    <div className={style.Ddog}>
                        <div className={style.blockDog}>
                            <img draggable={false} className={style.dog} src={dog}/>
                        </div>
                    </div>
                    <div onMouseDown={() => {
                        setRotation(rotation - 75);
                    }} onMouseUp={() => {
                        setRotation(0)
                        dispatch(increment);
                    }} className={style.pick2}>
                        <img style={imageStyle} draggable={false} src={pick}/>
                    </div>
                </div>
                <div className={style.earthBlock}>
                    <img draggable={false} src={earth}/>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.planets}>
                   <Link to={'/moon'}><div className={style.planetBlock1}><img draggable={false} src={moon}/></div></Link>
                   <Link to={'/mars'}><div className={style.planetBlock2}><img draggable={false} src={mars}/></div></Link>
                   <Link to={'/neptune'}><div className={style.planetBlock2}><img draggable={false} src={neptune}/></div></Link>
                </div>
                <div className={style.market}>
                    <div className={style.settings}>
                        <button onClick={() => setShop(true)} className={style.shop}>SHOP</button>
                        <button onClick={() => setShop(false)} className={style.upgrade}>UPGRADE</button>
                    </div>
                    {isShop ?
                        <div className={'qwe'}>
                            <div className={style.block1}>
                                <First/>
                                <Second/>
                            </div>
                            <div className={style.block1}>
                                <Third/>
                                <div className={style.first1}>
                                    <img draggable={false} className={style.locked} src={locked}/>
                                </div>
                            </div>
                            <div className={style.block1}>
                                <div className={style.first1}>
                                    <img draggable={false} className={style.locked} src={locked}/>
                                </div>
                                <div className={style.first1}>
                                    <img draggable={false} className={style.locked} src={locked}/>
                                </div>
                            </div>
                        </div> : <div className={style.upGrade}>
                            <div className={style.elements}>
                                <UpFirst/>
                                <UpSecond/>
                                <UpThird/>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}
export default Earth;

