import React from 'react';
import PropTypes from 'prop-types';

import './ItemView.css';

class ItemView extends React.Component {
    static PropTypes = {
        item: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className='ItemView'>
                <div className='ItemName'>Name: {this.props.item.name}</div>
                <div className='ItemPrice'>Price, byn: {this.props.item.price}</div>
                <div className='ItemCount'>Quantity: {this.props.item.count}</div>
            </div>
            
        )
    }
}

export default ItemView;