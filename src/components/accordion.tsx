import React, {useState} from 'react';
import AccordionTitle from "./accordionTitle";
import AccordionBody from "./accordionBody";


type PropsType = {
    title: string
}

function Accordion(props: PropsType) {
    let [collapsed, setCollapsed] = useState<boolean>()
    const toggle = ()=>{
        setCollapsed(!collapsed)
    }

    return (

        <div>
            <AccordionTitle title={props.title} toggle={toggle}/>
            {collapsed ? '' : <AccordionBody/> }
        </div>
    )
}

export default Accordion;