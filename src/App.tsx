import React from 'react';
import './App.css';
import Rating from "./components/rating";
import Accordion from "./components/accordion";
import AppTitle from "./components/appTitle";

function App() {
    return (
        <div className="App">
            <AppTitle title={'This is my first app'}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={'MENU'} collapsed={true}/>
            <Accordion title={'USERS'} collapsed={false}/>
        </div>
    );
}

export default App;
