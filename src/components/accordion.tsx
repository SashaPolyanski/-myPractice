import React, {useState} from 'react';
import AccordionTitle from "./accordionTitle";
import AccordionBody from "./accordionBody";


type PropsType = {
    title: string
    setAccValue:(value:boolean)=>void
    value: boolean
}

function Accordion(props: PropsType) {

    return (

        <div>
            <AccordionTitle title={props.title} setAccValue={props.setAccValue} value={props.value} />
            {props.value ? '' : <AccordionBody/> }
        </div>
    )
}

export default Accordion;