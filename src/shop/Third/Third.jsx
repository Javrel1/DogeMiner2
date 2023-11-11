import style from './style.module.css';
import kittens from "../../resources/kittens.png";
import {decrement_3} from "../../store/reducer";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import gold from '../../resources/gold.png';
import md from "../../resources/md.png";


function Third(){

    const count = useSelector((state) => state);
    const dispatch = useDispatch();
    var result;

    const handleDragStart = (event) => {
        dispatch(decrement_3)
        event.dataTransfer.setData('text/plain', md);
        event.dataTransfer.effectAllowed = 'copy';
    };

    return(
        <div className={style.block1}>
                <div className={style.first3}>
                    <div className={style.text}>
                        <a className={style.mSh}>Stock Kittens</a>
                        <a className={style.dps}>29.8 DPS</a>
                        <div className={style.info}>
                            <img onDragStart={handleDragStart} className={style.kittens} src={kittens}/>
                            <div draggable={false} className={style.Info}>
                                <a className={style.infO}>Stock kittens invest dogecoin. Such profit!</a>
                            </div>
                        </div>
                        <div className={style.buy}>
                            <button className={style.button1}>
                                <img draggable={false} className={style.myGold} src={gold}/><a className={style.price}>6,333</a></button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Third;