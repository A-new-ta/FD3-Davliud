import React from 'react';
import './ItemView.css';


function ItemView(props) {
        
    return (
        <div className='ItemView'>
            <div className='ItemName'>Name: {props.item.name}</div>
            <div className='ItemPrice'>Price, byn: {props.item.price}</div>
            <div className='ItemCount'>Quantity: {props.item.count}</div>
        </div>
    );
}


export default ItemView;