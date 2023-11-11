import style from './style.module.css';
import md from "../../resources/md.png";
import {decrement_1} from '../../store/reducer'
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import gold from '../../resources/gold.png';


function First(){
    const count = useSelector((state) => state);
    const dispatch = useDispatch();
    var result;

    const handleDragStart = (event) => {
            dispatch(decrement_1)
            event.dataTransfer.setData('text/plain', md);
            event.dataTransfer.effectAllowed = 'copy';
    };


    return(
        <div className={style.block1}>
                <div id={"first"} className={style.first}>
                    <div className={style.text}>
                        <a className={style.mSh}>Mining Shibe</a>
                        <a className={style.dps}>2.1 DPS</a>
                        <div className={style.info}>
                                <img onDragStart={handleDragStart} draggable={true} style={{ width: '60px', height: '60px' }} alt="Перетаскиваемая фотография" id="md" className={style.miniDOG} src={md}/>
                            <a className={style.infO}>Well-paid happy shibe to mine much dogecoin</a>
                        </div>
                        <div className={style.buy}>
                            <button className={style.button}>
                                <img draggable={false} className={style.myGold} src={gold}/>
                                <a className={style.price}>20</a>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default First;