import React, {useState} from 'react';
import Star from "./star";

type PropsType = {
    value: 1 | 2 | 3 | 4 | 5
}


function Rating(props: PropsType) {
    let [value, setValue] = useState(0)

    const valueStar = ()=> {
        setValue(1)
    }

    return(
        <div>
            <Star selected={value>0}/>
            <Star selected={value>1}/>
            <Star selected={value>2}/>
            <Star selected={value>3}/>
            <Star selected={value>4}/>
        </div>
    )
}

export default Rating;