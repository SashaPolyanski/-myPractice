import React from 'react';


type PropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

function Star (props:PropsType) {


    return  <span onClick={()=>{props.setValue(props.value)}}> {props.selected ? <b>star</b> : "star"} </span>


}
export default Star;