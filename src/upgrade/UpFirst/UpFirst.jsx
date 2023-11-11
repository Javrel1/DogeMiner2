import style from './style.module.css';
import strongDog from "../../resources/strongDog.png";
import diamond from "../../resources/diamond.png";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

function UpFirst(){

    const count = useSelector((state) => state);
    const dispatch = useDispatch();
    var result;

    return(
        <div className={style.element}>
            <div className={style.top}>
                <a className={style.int}>Strong Dog</a>
            </div>
            <div className={style.center}>
                <img draggable={false} className={style.strongDog} src={strongDog}/>
                <a className={style.enl}>Digging Your Skin Will Be 7x Better</a>
                <a className={style.dps2}>21.2 DPS</a>
            </div>
            <div className={style.bottom1}>
                <button className={style.button3}>
                    <img draggable={false} className={style.myGold} src={'https://cdn-icons-png.flaticon.com/128/138/138540.png'}/>
                    <a className={style.price}>250.000</a>
                </button>
                <div className={style.diamondBlock}>
                    <img draggable={false} className={style.diamond} src={diamond}/>
                    1
                </div>
            </div>
        </div>

    )
}
export default UpFirst;