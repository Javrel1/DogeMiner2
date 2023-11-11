import style from './style.module.css';
import greenRocket from "../../resources/greenRocket.png";
import {decrement_4} from "../../store/reducer";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import gold from '../../resources/gold.png';
import md from "../../resources/md.png";


function Fourth(){

    const count = useSelector((state) => state);
    const dispatch = useDispatch();
    var result;

    const handleDragStart = (event) => {
        dispatch(decrement_4)
        event.dataTransfer.setData('text/plain', md);
        event.dataTransfer.effectAllowed = 'copy';
    };

    return(
        <div className={style.block}>
                <div className={style.first4}>
                    <div className={style.text}>
                        <a className={style.mSh}>Stock Kittens</a>
                        <a className={style.dps}>19.8 DPS</a>
                        <div className={style.info}>
                            <img onDragStart={handleDragStart} className={style.kittens} src={greenRocket}/>
                            <div className={style.Info}>
                                <a className={style.INFo}>A warp drive rocket to travel to the moon.</a>
                            </div>
                        </div>
                        <div className={style.buy}>
                            <button className={style.buttonn}>
                                <img draggable={false} className={style.myGold} src={gold}/><a className={style.price}>100,568</a></button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Fourth;