import React from "react";

const withRainbowFrame = (colors) => (Component) => (props) => (
    colors.reduce((res, color) => (
        <div className='withRainbowFrame' style={{ borderColor: `${color}` }}>
            {res}
        </div>
    ), <Component {...props} />)
);


export default withRainbowFrame;
