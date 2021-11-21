import React from 'react';
import AccordionTitle from "./accordionTitle";
import AccordionBody from "./accordionBody";


type PropsType = {
    title: string
    collapsed:boolean
}

function Accordion(props: PropsType) {


    return (

        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed ? <AccordionBody/> : '' }
        </div>
    )
}

export default Accordion;