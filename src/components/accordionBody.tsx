import React from 'react';


type PropsType = {
    items: string[]
}

function AccordionBody(props: PropsType) {

    return (
        <div>
            <ul>
                {props.items.map((i, index)=><li key={index}>{i}</li>)}
            </ul>

        </div>
    )
}

export default AccordionBody;