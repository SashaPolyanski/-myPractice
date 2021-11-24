import React from 'react';





type PropsType = {
    title: string
    setAccValue:(value:boolean)=>void
    value: boolean
}

function AccordionTitle (props:PropsType) {
    return(
        <h2 onClick={()=>{props.setAccValue(!props.value)}}>{props.title}</h2>
    )
}

export default AccordionTitle;