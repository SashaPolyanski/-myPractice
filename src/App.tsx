import React, {useState} from 'react';
import './App.css';
import Rating, {valuePropsType} from "./components/rating";
import Accordion from "./components/accordion";
import AppTitle from "./components/appTitle";
import OnOff from "./components/onOff";

function App() {

    let [ratingValue, setRatingValue] = useState<valuePropsType>(0)
    let [accValue, setAccValue] = useState<boolean>(false)

    return (
        <div className="App">
            <AppTitle title={'This is my first app'}/>
            <Rating
                value={ratingValue}
                setValue={setRatingValue}/>
            <Accordion title={'MENU'}
                       value={accValue}
                       setAccValue={setAccValue}/>
            <Accordion title={'USERS'}
                       value={accValue}
                       setAccValue={setAccValue}/>
            <Rating value={ratingValue}
                    setValue={setRatingValue}/>


            <OnOff/>
        </div>
    );
}

export default App;
