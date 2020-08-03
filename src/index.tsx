import React, {FC, ReactElement, useCallback, useEffect, useMemo, useReducer, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello: React.FC<{ StrLabel: String }> = (props) => {
    const [count, setCount] = useState(1000);
    const forAppListCount = useMemo(() => count-1000, [count]);
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const [currentCountState,dispatch] = useReducer(updateClickedCount,0);
    function updateClickedCount(currentState:number,addState:number):number{
        return currentState+addState;
    }
    const scrollCheck = () => {
        if (window.pageYOffset / window.innerHeight > 2.0) {
            setCount(count + 100);
        }
    };
    const indexCSS ={
        display:"flex",
        flexWrap:"wrap"
    } as React.CSSProperties;
    useEffect(() => {
        document.addEventListener("scroll", scrollCheck);
        return (): void => document.removeEventListener("scroll", scrollCheck);
    });
    const AppList = () => {
        let jsxList: React.ReactElement[] = new Array(1);
        for (let i = forAppListCount; i < count; i++) {
            jsxList.push(<App color={`hsl(${i/10},100%,50%)`} key={i} val={i} dispatch={dispatch} currentCountState={currentCountState}/>)
        }
        return jsxList;
    }
    return (
        <React.StrictMode>
                <button onClick={handleClick}>+1する</button>
            <div style={indexCSS}>
                {AppList()}</div>
        </React.StrictMode>)
}
function scrollCheck(){
    console.log(window.pageYOffset / window.innerHeight);
}
ReactDOM.render(
    <React.StrictMode>
        <div onScrollCapture={scrollCheck}></div>
        <Hello StrLabel={"react"}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
