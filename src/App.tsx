import React from 'react';
import './App.css';
import Rating from "./components/rating";
import Accordion from "./components/accordion";
import AppTitle from "./components/appTitle";
import OnOff from "./components/onOff";

function App() {
    return (
        <div className="App">
            <AppTitle title={'This is my first app'}/>
            <Rating value={1}/>
            <Accordion title={'MENU'} />
            <Accordion title={'USERS'} />


            <OnOff/>
        </div>
    );
}

export default App;
