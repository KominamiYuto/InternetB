import React, {FC, ReactElement, useCallback, useEffect, useMemo, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello: React.FC<{ StrLabel: String }> = (props) => {
    const [count, setCount] = useState(100);
    const left = useMemo(() => count, [count]);
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const scrollCheck = () => {
        if (window.pageYOffset / window.innerHeight > 0.4) {
            setCount(count + 10);
        }
        console.log(window.pageYOffset / window.innerHeight);
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
        for (let i: number = 0; i < count; i++) {
            jsxList.push(<App color={`hsl(${i/10},100%,50%)`} positionX={0} positionY={0} key={i} val={i}/>)
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
