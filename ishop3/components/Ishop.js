import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Item from './Item';


class Ishop extends React.Component {

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
    shop: PropTypes.string
  }

  state = {
    heads: ['Name', 'Price', 'URL', 'Quantity', 'Control'],
    selectedItemId: '',
    items: this.props.items,
  }

  deleteItem = (id) => {
    this.setState({ items: this.state.items.filter(v => v.id != id) })
  }

  selectItem = (id) => {
    this.setState({ selectedItemId: id })
  }

  render() {
    let shopName = this.props.shop
    let itemHead = <tr>
      {this.state.heads.map((v, i) => <th> {({ key: i, className: 'ShopHead' }, v)} </th>)}
    </tr>

    let itemTable = this.state.items.map(item =>
      <Item key={item.id}
        id={item.id} name={item.name} price={item.price}
        urlItem={item.urlItem} count={item.count}
        selectedItems={item.id == this.state.selectedItemId}
        cbSelect={this.selectItem}
        cbDelete={this.deleteItem}
      />
    );

    return (
      <div>
        <div className='IshopName'>{shopName}</div>
        <table className='Ishop'>
          <thead>{itemHead}</thead>
          <tbody>{itemTable}</tbody>
        </table>
      </div>
    )
  }
}


export default Ishop;

  
    
    
    




    
  
