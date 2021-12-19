import React from 'react';
import PropTypes from 'prop-types';

import './ItemView.css';

class ItemView extends React.Component {
    static PropTypes = {
        // id: PropTypes.number.isRequired,
        // name: PropTypes.string.isRequired,
        // price: PropTypes.number.isRequired,
        // // urlItem: PropTypes.string.isRequired,
        // count: PropTypes.number.isRequired,
        item: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className='ItemView'>
                <div className='ItemName'>Name: {this.props.item.name}</div>
                <div className='ItemPrice'>Price: {this.props.item.price}</div>
                <div className='ItemCount'>Count: {this.props.item.count}</div>
            </div>
            
        )
    }
}

export default ItemView;