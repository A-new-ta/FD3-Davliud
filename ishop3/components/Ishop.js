import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import IshopName from './IshopName';
import Item from './Item';


class Ishop extends React.Component {

  static propTypes = {
    // items: React.PropTypes.arrayOf(
    //   React.PropTypes.shape({
    //     id: React.PropTypes.number.isRequired,
    //     name: React.PropTypes.string,
    //     price: React.PropTypes.number.isRequired,
    //     urlItem: React.PropTypes.string,
    //     count: React.PropTypes.number.isRequired,
    //   })
    // )
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
        <IshopName name={this.props.name} />
        <table>
          <thead>{itemHead}</thead>
          <tbody>{itemTable}</tbody>
        </table>
      </div>
    )
  }
}


  

  
    
    
    




    
  
