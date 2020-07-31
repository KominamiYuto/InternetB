import React, {useCallback, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Simulate} from "react-dom/test-utils";

const App: React.FC<{ color: string,positionX:number,positionY:number ,val:number}> = (props) => {
    const [position, setPos] = useState(props.positionX);
    const appCSS = {
        fontsize: 24,
        borderRadius:5,
        transform: `translate3d(${position}px, ${position}px,0) rotate(0deg)`,
        width:300,
        border:'solid 2px',
        borderColor:props.color,
        position:'relative',
        transitionDuration:"2s"
    } as React.CSSProperties;
    const click = useCallback((e)=>{
        let X = 100;
        let Y = 100;
        let elm = document.elementFromPoint(X, Y);
        console.log(elm);

        setPos(500);
    },[position]);

    return (
            <button onClick={click} style={appCSS}>
                <p>
                    reactを触った{props.val}日目！
                </p>
            </button>
    );
}

export default App;
