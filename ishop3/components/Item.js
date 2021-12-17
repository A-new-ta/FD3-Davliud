import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

class Item extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string,
                price: PropTypes.number.isRequired,
                urlItem: PropTypes.string,
                count: PropTypes.number.isRequired,
            })
        ),
        selectedItems: PropTypes.bool.isRequired,
        cbSelect: PropTypes.func.isRequired,
        cbDelete: PropTypes.func.isRequired,
    };

    selectedRow = () => {
        this.props.cbSelect(this.props.selectedItems ? '' : this.props.id);
    }

    deleteRow = (eo) => {
        if (confirm('Хотите удалить товар?')) this.props.cbDelete(this.props.id);
        eo.stopPropagation();
    }

    render() {
        return (
            <tr className={this.props.selectedItems ? 'ItemSelect' : 'Item'}
                key={this.props.id}
                onClick={this.selectedRow}>
                <td className='ItemName'>{this.props.name}</td>
                <td className='ItemPrice'>{this.props.price}</td>
                <td className='ItemImage'>
                    <img src={this.props.urlItem} alt={this.props.name}></img>
                </td>
                <td className='ItemCount'>{this.props.count}</td>
                <td className='ItemAction'>
                    <input type='button' name='deleteButton' className='ItemButton'
                        value='delete'
                        onClick={this.deleteRow}></input>
                </td>
            </tr>
        )
    }
}

export default Item;
        
        

    
    
    

    

    