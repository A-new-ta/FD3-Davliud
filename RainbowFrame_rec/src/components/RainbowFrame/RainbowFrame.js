import React from 'react';
import './RainbowFrame.css';


  
const RainbowFrame = props => {
    if (props.colors.length === 0) {
        return props.children
    } else {
        return <div className='RainbowFrame' style={{borderColor:`${props.colors[props.colors.length-1]}`}}>
            <RainbowFrame colors={props.colors.slice(0, props.colors.length - 1)}>
                {props.children}
            </RainbowFrame>
        </div>
    }
}

export default RainbowFrame;






