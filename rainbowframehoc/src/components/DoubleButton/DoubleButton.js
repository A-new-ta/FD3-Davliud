import React from "react";

const DoubleButton = (props) => (
    <div>
        <input type='button' value={props.caption1} onClick={() => props.cbPressed('1')} />
        {props.children}
        <input type='button' value={props.caption2} onClick={() => props.cbPressed('2')} />
    </div>
);

export default DoubleButton;

