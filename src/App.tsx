import React from 'react';
import './App.css';
import StandardElemet from "./StandardElement";
import BombedElement from "./BombedElement";

const App: React.FC<{ val: number, dispatch: React.Dispatch<number>, currentCountState: number ,bumbedPack: {isBombed: boolean, setBombed: React.Dispatch<React.SetStateAction<boolean>>}}> = (props) => {
    if(props.val%1000===0&&props.val>2000){
        return <BombedElement val={props.val} dispatch={props.dispatch} currentCountState={props.currentCountState} bumbedPack={props.bumbedPack}/>
    }
    return (
        <StandardElemet val={props.val} dispatch={props.dispatch} currentCountState={props.currentCountState} bumbedPack={props.bumbedPack}/>
    );
}

export default App;
