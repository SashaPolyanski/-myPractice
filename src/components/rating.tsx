import React, {useState} from 'react';
import Star from "./star";

export type valuePropsType = 0 | 1 | 2 | 3 | 4 | 5

type PropsType = {
    value: valuePropsType
    setValue: (value: valuePropsType) => void
}

function Rating(props: PropsType) {


    return (
        <div>
            <Star selected={props.value > 0} setValue={props.setValue} value={1}/>
            <Star selected={props.value > 1} setValue={props.setValue} value={2}/>
            <Star selected={props.value > 2} setValue={props.setValue} value={3}/>
            <Star selected={props.value > 3} setValue={props.setValue} value={4}/>
            <Star selected={props.value > 4} setValue={props.setValue} value={5}/>
        </div>
    )
}

export default Rating;