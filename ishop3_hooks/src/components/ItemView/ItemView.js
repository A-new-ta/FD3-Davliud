import React from 'react';
import './ItemView.css';


function ItemView(props) {
    const {name, price, count} = props.item;
    
    return (
        <div className='ItemView'>
            <div className='ItemName'>Name: {name}</div>
            <div className='ItemPrice'>Price, byn: {price}</div>
            <div className='ItemCount'>Quantity: {count}</div>
        </div>
    );
}


export default ItemView;