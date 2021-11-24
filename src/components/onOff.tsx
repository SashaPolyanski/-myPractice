import React, {useState} from 'react';
import s from './onOff.module.css'

type PropsType = {
    setOn: (value:boolean)=>void
    value: boolean
}

function OnOff(props: PropsType) {

 const onSet = () => {
     props.setOn(true)
 }
 const offSet = ( ) => {
     props.setOn(false)
 }
    return(
        <div className={s.body}>
            <span className={props.value ? s.on : s.on2} onClick={onSet} >ON</span>
            <span className={!props.value ? s.off : s.off2} onClick={offSet}>OFF</span>
        </div>
    )

}

export default OnOff;