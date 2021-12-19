import React from 'react';
import PropTypes from 'prop-types';
import './Ishop.css';
import Item from './Item';
import ItemView from './ItemView';


class Ishop extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    shop: PropTypes.string.isRequired
  }

  state = {
    heads: ['Name', 'Price', 'URL', 'Quantity', 'Control'],
    selectedItemId: '',
    items: this.props.items.slice(), 
    cardMode: 0, // 0 - нет, 1 - режим просмотра, 2 - режим редактирования, 3 - режим добавления товара
    buttonMode: false,

  }
// при нажатии по кнопке delete
  deleteItem = (id) => {
    this.setState({ items: this.state.items.filter(v => v.id != id), cardMode: 0 })
  }

// клик по строке с товаром
  selectItem = (id) => {
    this.setState({ cardMode: 1, selectedItemId: id, buttonMode: false })
  }


// callback для itemEdit
  cbSave = (newItem) => {

  }

// cancel button
  cbCancel = () => {

  }

// edit button
  changeItem = (id) => {

  }



  render() {
    let item = this.state.items.find((v => v.id === this.state.selectedItemId));
    let shopName = this.props.shop
    let itemHead = <tr>
      {this.state.heads.map((v, i) => <th className='ShopHead' key={i}>{v}</th>)}
    </tr>

    let itemTable = this.state.items.map(item =>
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        urlItem={item.urlItem}
        count={item.count}

        selectedItems={item.id == this.state.selectedItemId}
        cbSelect={this.selectItem}
        cbDelete={this.deleteItem}
        
        cbEditItem={this.changeItem}
        buttonMode={this.state.buttonMode}

      />
    );

    return (
      <div>
        <div className='IshopName'>{shopName}</div>
        <table className='Ishop'>
          <thead>{itemHead}</thead>
          <tbody>{itemTable}</tbody>
        </table>
        {this.state.cardMode == 1 && <ItemView item={item}/>}
      </div>
    )
  }
}


export default Ishop;

  
    
    
    




    
  
