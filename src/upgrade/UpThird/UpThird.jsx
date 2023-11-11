import style from './style.module.css';
import cat from "../../resources/cat.png";
import {UpgradeDecrement3} from "../../store/reducer";
import diamond from '../../resources/diamond.png';
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

function UpThird(){

    const count = useSelector((state) => state);
    const dispatch = useDispatch();
    var result;

    return(
        <div className={style.element}>
            <div className={style.top}>
                <a className={style.int}>Blue Helmets</a>npm
            </div>
            <div className={style.center}>
                <img draggable={false} className={style.bh} src={cat}/>
                <a className={style.InFo}>A blue crown will be available for your hero</a>
                <a className={style.dps2}>41.3 DPS</a>
            </div>
            <div className={style.bottom}>
                <button className={style.button2}>
                    <img draggable={false} className={style.myGold} src={'https://cdn-icons-png.flaticon.com/128/138/138540.png'}/>
                    <a className={style.price}>750.000</a>
                </button>
                <div className={style.diamondBlock}>
                    <img draggable={false} className={style.diamond} src={diamond}/>
                    1
                </div>
            </div>
        </div>

    )
}
export default UpThird;