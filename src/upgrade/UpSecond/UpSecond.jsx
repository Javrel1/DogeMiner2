import style from './style.module.css';
import cactus from "../../resources/cactus.png";
import {UpgradeDecrement2} from "../../store/reducer";
import diamond from "../../resources/diamond.png";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

function UpSecond(){

    const count = useSelector((state) => state);
    const dispatch = useDispatch();
    var result;

    return(
        <div className={style.element}>
            <div className={style.top}>
                <a className={style.int}>New Weapon</a>
            </div>
            <div className={style.center}>
                <img draggable={false} className={style.gh} src={cactus}/>
                <a className={style.InFo}>You Get New Weapons And DPS Upgrades</a>
                <a className={style.dps2}>12.9 DPS</a>
            </div>
            <div className={style.bottom}>
                <button draggable={false} className={style.button2}>
                    <img className={style.myGold} src={'https://cdn-icons-png.flaticon.com/128/138/138540.png'}/>
                    <a className={style.price}>500.000</a>
                </button>
                <div className={style.diamondBlock}>
                    <img draggable={false} className={style.diamond} src={diamond}/>
                    1
                </div>
            </div>
        </div>

    )
}
export default UpSecond;