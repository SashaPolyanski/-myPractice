import React, {useState} from 'react';
import s from './onOff.module.css'

type PropsType = {
}

function OnOff(props: PropsType) {

let [on, setOn] = useState<boolean>(true);
 const onSet = () => {
     setOn(true)
 }
 const offSet = ( ) => {
     setOn(false)
 }
    return(
        <div className={s.body}>
            <span className={on ? s.on : s.on2} onClick={onSet} >ON</span>
            <span className={!on ? s.off : s.off2} onClick={offSet}>OFF</span>
        </div>
    )

}

export default OnOff;