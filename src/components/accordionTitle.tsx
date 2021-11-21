import React from 'react';





type PropsType = {
    title: string
}

function AccordionTitle (props:PropsType) {
    return(
        <h2>{props.title}</h2>
    )
}

export default AccordionTitle;