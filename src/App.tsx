import React from 'react';
import './App.css';
import StandardElemet from "./StandardElement";

const App: React.FC<{ val: number, dispatch: React.Dispatch<number>, currentCountState: number }> = (props) => {

    return (
        <StandardElemet val={props.val} dispatch={props.dispatch} currentCountState={props.currentCountState}/>
    );
}

export default App;
