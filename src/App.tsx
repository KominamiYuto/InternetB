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
        transitionDuration:"2s",
        transitionTimingFunction:"ease-out",
        backdropFilter: `blur(2px)`,
        backgroundColor:"rgba(0,0,0,0)"
    } as React.CSSProperties;
    const click = useCallback((e)=>{
        let X = 100;
        let Y = 100;
        let elm = document.elementFromPoint(X, Y);
        let offsetX = e.offsetX; // =>要素左上からのx座標
        let offsetY = e.offsetY;
        console.log(offsetX );
        let clickX = e.pageX ;
        let clickY = e.pageY ;

        // 要素の位置を取得
        let clientRect = e.target.getBoundingClientRect() ;
        let positionX = clientRect.left + window.pageXOffset ;
        let positionY = clientRect.top + window.pageYOffset ;

        // 要素内におけるクリック位置を計算
        let x = clickX - positionX ;
        let y = clickY - positionY ;
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
