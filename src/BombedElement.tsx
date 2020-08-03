import React, {useCallback, useMemo, useRef, useState} from 'react';
import './App.css';

const BombedElement: React.FC<{ val: number, dispatch: React.Dispatch<number>, currentCountState: number, bumbedPack: {isBombed: boolean, setBombed: React.Dispatch<React.SetStateAction<boolean>>}}> = (props) => {
    const [position, setPos] = useState({x: 0, y: 0, rotate: 0, zIndex: 0});
    const [isVisible,setNone] = useState('visible');
    const isNone = useMemo(()=>{
        if(isVisible==='hidden'){
            return 'none';
        }else{
            return 'inherit'
        }
    },[isVisible]);
    useMemo(() =>{
        if(props.bumbedPack.isBombed){
            props.dispatch(1);
        }

    }, [props.bumbedPack.isBombed]);
    const appCSS = {
        fontsize: 24,
        borderRadius: 5,
        transform: `translate3d(${position.x}px, ${position.y}px,0) rotate(${position.rotate}deg)`,
        width: 300,
        zIndex: position.zIndex,
        border: 'solid 2px',
        borderColor: `hsl(19, 100%, 22%)`,
        position: 'relative',
        transitionTimingFunction: "ease-out",
        backdropFilter: "blur(2px)",
        backgroundColor: `hsl(26, 100%, 31%)`,
        visibility:isVisible,
        pointerEvents:isNone
    } as React.CSSProperties;
    const ref = useRef<null | HTMLButtonElement>(null);
    const click = useCallback(() => {
        props.bumbedPack.setBombed(true);
        setNone('hidden');
    }, [props]);

    return (
        <button onClick={click} style={appCSS} ref={ref}>
            <p>
                {props.currentCountState}
            </p>
        </button>
    );
}

export default BombedElement;