import style from './style.module.css';
import rockets from "../../resources/rockets.png";
import {decrement_2} from "../../store/reducer";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import gold from '../../resources/gold.png';
import md from "../../resources/md.png";

function Second(){

    const count = useSelector((state) => state);
    const dispatch = useDispatch();
    var result;

    const handleDragStart = (event) => {
        dispatch(decrement_2)
        event.dataTransfer.setData('text/plain', md);
        event.dataTransfer.effectAllowed = 'copy';
    };


    return(
        <div className={style.block1}>
                <div className={style.first2}>
                    <div className={style.text}>
                        <a className={style.mSh}>Jet-Pack Doges</a>
                        <a className={style.dps}>12.9 DPS</a>
                        <div className={style.info}>
                            <img onDragStart={handleDragStart} draggable={true} src={rockets}/>
                            <div className={style.Info}>
                                <a className={style.infO}>Equipped with jet packs, doges travel</a>
                            </div>
                        </div>
                        <div className={style.buy}>
                            <button className={style.button}>
                                <img draggable={false} className={style.myGold} src={gold}/><a className={style.price}>926</a></button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Second;