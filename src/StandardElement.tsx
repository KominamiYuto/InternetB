import React, {useCallback, useRef, useState} from 'react';
import './App.css';

const StandardElemet: React.FC<{ val: number, dispatch: React.Dispatch<number>, currentCountState: number}> = (props) => {
    const [position, setPos] = useState({x: 0, y: 0, rotate: 0, zIndex: 0});
    const appCSS = {
        fontsize: 24,
        borderRadius: 5,
        transform: `translate3d(${position.x}px, ${position.y}px,0) rotate(${position.rotate}deg)`,
        width: 300,
        zIndex: position.zIndex,
        border: 'solid 2px',
        borderColor: `hsl(${props.val / 10},100%,50%)`,
        position: 'relative',
        transitionDuration: "2s",
        transitionTimingFunction: "ease-out",
        backdropFilter: "blur(2px)",
        backgroundColor: `hsla(${props.val / 10},100%,90%,0.2)`
    } as React.CSSProperties;
    const ref = useRef<null | HTMLButtonElement>(null);
    const click = useCallback((e) => {
        let clickX = e.pageX;
        let clickY = e.pageY;
        // 要素の位置を取得
        if (ref.current !== null) {
            let clientRect = ref.current.getBoundingClientRect();
            let positionX = clientRect.left + window.pageXOffset;
            let positionY = clientRect.top + window.pageYOffset;

            // 要素内におけるクリック位置を計算
            let elementX: number = clickX - positionX;
            let elementY: number = clickY - positionY;

            let center = {
                x: e.target.offsetWidth / 2,
                y: e.target.offsetHeight / 2
            }
            console.log(e.target.offsetWidth);
            let newPos = {
                x: (center.x - elementX) * 5,
                y: (center.y - elementY) * 5,
                rotate: (center.y - elementY) * -(center.x - elementX) * 0.7,
                zIndex: position.zIndex + 1
            }
            props.dispatch(1);
            setPos(newPos);
        }
    }, [position,props]);

    return (
        <button onClick={click} style={appCSS} ref={ref}>
            <p>
                {props.currentCountState}
            </p>
        </button>
    );
}

export default StandardElemet;