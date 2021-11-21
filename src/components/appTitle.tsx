import React from 'react';

type PropsType = {
    title:string
}



function AppTitle (props:PropsType) {
    return(
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default AppTitle;