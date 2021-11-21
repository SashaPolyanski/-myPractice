import React from 'react';


type PropsType = {
    selected: boolean
}

function Star (props:PropsType) {


if (props.selected) {
    return <span><b>star</b></span>
}
else {
    return <span>star</span>
}

}
export default Star;