import React from 'react';
import './RainbowFrame.css';

  
export default props =>
<div>
    {
        props.colors.reduce((res, color) => (
            <div className='RainbowFrame' style={{borderColor: `${color}`}}>
                {res}
            </div>
        ), props.children)
    }
</div>









