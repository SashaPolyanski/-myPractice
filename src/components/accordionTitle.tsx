import React from 'react';





type PropsType = {
    title: string
    toggle:()=>void
}

function AccordionTitle (props:PropsType) {
    return(
        <h2 onClick={props.toggle}>{props.title}</h2>
    )
}

export default AccordionTitle;