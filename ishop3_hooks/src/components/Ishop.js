import React from 'react';
import PropTypes from 'prop-types';
import './Ishop.css';
import Item from './Item/Item';
import ItemView from './ItemView/ItemView';
import ItemEdit from './ItemEdit/ItemEdit';
  



class Ishop extends React.Component {

  // static propTypes = {
  //   items: PropTypes.array.isRequired,
  //   shop: PropTypes.string.isRequired
  // }

  state = {
    heads: ['Name', 'Price, byn', 'URL', 'Quantity', 'Control'],
    selectedItemId: 0,
    items: this.props.items, 
    cardMode: 0, // 0 - нет, 1 - режим просмотра, 2 - режим редактирования, 3 - режим добавления товара
    buttonMode: false, // delete button block
    blockChange: false, // edit button block
    idNew: this.props.items.length + 1,
  }

// при нажатии по кнопке delete
  deleteItem = (id) => {
    this.setState({ items: this.state.items.filter(v => v.id != id), cardMode: 0 })
  }

// клик по строке с товаром
  selectItem = (id) => {
    this.setState({ cardMode: 1, selectedItemId: id, buttonMode: false })
  }


// callback для itemEdit сохранение товара
  cbSave = (newItem) => {
    if (this.state.cardMode === 2) {
      let editInd;
      this.state.items.forEach((v, i) => {
        if (v.id === newItem.id) {
          editInd = i;
        }
      });
      let editItems = this.state.items;
      editItems[editInd] = newItem;
      this.setState({ items: editItems });
    }
    if (this.state.cardMode === 3) {
      this.state.items.push(newItem);
      this.setState({ idNew: newItem.id + 1 });
    }
    this.setState({ cardMode: 0, buttonMode: false, blockChange: false });
  }

// cancel button
  cbCancel = () => {
    this.setState({ cardMode: 0, buttonMode: false, blockChange: false });
  }

// edit button
  changeItem = (id) => {
    this.setState({ cardMode: 2, selectedItemId: id, buttonMode: true });
  }

  OnChange = () => {
    this.setState({ blockChange: true });
  }

  addItem = () => {
    this.setState({ cardMode: 3, buttonMode: true, blockChange: true, selectedItemId: 0 });
  }


  render() {
    let item = this.state.items.find((v => v.id === this.state.selectedItemId));
    let newItem = { id: this.state.idNew, name: '', price: '', urlItem: '', count: '' };
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
        
        cbEdit={this.changeItem}
        buttonMode={this.state.buttonMode}
        blockChange={this.state.blockChange}

      />
    );

    return (
      <div>
        <div className='IshopName'>{shopName}</div>
        <table className='Ishop'>
          <thead>{itemHead}</thead>
          <tbody>{itemTable}</tbody>
        </table>
        {(this.state.cardMode === 0 || this.state.cardMode === 1) && <input type='button' value='New product' onClick={this.addItem}/>}
        {this.state.cardMode === 1 && <ItemView item={item} />}
        {this.state.cardMode === 2 && <ItemEdit
          key={item.id}
          cardMode={this.state.cardMode}
          item={item}
          nameIsValid={true}
          priceIsValid={true}
          urlIsValid={true}
          countIsValid={true}
          cbSaveChanges={this.cbSave}
          cbCancelChanges={this.cbCancel}
          cbOnChange={this.OnChange}
        />}
        {this.state.cardMode === 3 && <ItemEdit
          key={newItem.id}
          cardMode={this.state.cardMode}
          item={newItem}
          nameIsValid={false}
          priceIsValid={false}
          urlIsValid={false}
          countIsValid={false}
          cbSaveChanges={this.cbSave}
          cbCancelChanges={this.cbCancel}
          cbOnChange={this.OnChange}
        />}
      </div>
    )
  }
}


export default Ishop;

  
    
    
    




    
  
