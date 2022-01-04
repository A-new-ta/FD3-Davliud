import React, { useState, useEffect } from 'react';
import './Ishop.css';
import Item from './Item/Item';
import ItemView from './ItemView/ItemView';
import ItemEdit from './ItemEdit/ItemEdit';
  


function Ishop (props) {

  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [cardMode, setCardMode] = useState(0);
  const [buttonMode, setButtonMode] = useState(false);
  const [blockChange, setBlockChange] = useState(false);
  const [idNew, setIdNew] = useState(0);
  const [dataReady, setDataReady] = useState(false);
    
  useEffect(() => {
    
    const url = 'https://fe.it-academy.by/AjaxStringStorage2.php';
    const name = 'DAVLIUD_ISHOP3_TEST';
        const params = new URLSearchParams();
        params.append('f', 'READ');
        params.append('n', name);

        const options = {
            method: 'POST',
            body: params
        }
        fetch(url, options)
            .then(response => response.json())
            .then((result) => {
              let itemArr = JSON.parse(result.result);
              setItems((itemArr));
              setDataReady(true);
              return itemArr;
            }) 
            .then((itemArr) => {
              setIdNew(itemArr.length+1);
            })
            .catch(error => console.log(error));
        }, []);

        
  // edit button
  function changeItem (id) {
    setCardMode(2);
    setSelectedItemId(id);
    setButtonMode(true);
  }

  // клик по строке с товаром
  function selectItem (id) {
    setCardMode(1);
    setSelectedItemId(id);
    setButtonMode(false);
  }


  // callback для itemEdit сохранение товара
  function cbSave(newItem) {
    if (cardMode === 2) {
      let editInd;
      items.forEach((v, i) => {
        if (v.id === newItem.id) {
          editInd = i;
        }
      });
      let editItems = items;
      editItems[editInd] = newItem;
      setItems(editItems);
    }
    if (cardMode === 3) {
      items.push(newItem);
      setIdNew(newItem.id + 1);
    }
    setCardMode(0);
    setButtonMode(false);
    setBlockChange(false);
  }


  // cancel button
  function cbCancel () {
    setCardMode(0);
    setButtonMode(false);
    setBlockChange(false);
  }

// при нажатии по кнопке delete
  function deleteItem (id) {
    const deletedItems = items.filter(v => v.id !== id);
    setItems(deletedItems);
    setSelectedItemId(0);
    setCardMode(0);
  }



  function OnChange () {
    setBlockChange(true);
  }

  function addItem () {
    setCardMode(3);
    setButtonMode(true);
    setBlockChange(true);
    setSelectedItemId(0);
  }


  let item = items.find((v => v.id === selectedItemId));
  let newItem = { id: idNew, name: '', price: '', urlItem: '', count: '' };

  if (!dataReady) 
      return <div>Loading...</div>
    
    return (
      <div>
       <table className='Ishop'>
          <caption>{props.shop}</caption>
          <tbody>
            <tr className='head'>
              <th>Name</th>
              <th>Price, byn</th>
              <th>URL</th>
              <th>Quantity</th>
              <th>Control</th>
            </tr>
            {items.map(item =>
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                urlItem={item.urlItem}
                count={item.count}

                selectedItems={item.id === selectedItemId}
                cbSelect={selectItem}
                cbDelete={deleteItem}
                
                cbEdit={changeItem}
                buttonMode={buttonMode}
                blockChange={blockChange}
              />
            )}
          </tbody>
        </table>
        {(cardMode === 0 || cardMode === 1) && <input type='button' value='New product' onClick={addItem}/>}
        {cardMode === 1 && <ItemView item={item} />}
        {cardMode === 2 && <ItemEdit
          key={item.id}
          cardMode={cardMode}
          item={item}
          nameIsValid={true}
          priceIsValid={true}
          urlIsValid={true}
          countIsValid={true}
          cbSaveChanges={cbSave}
          cbCancelChanges={cbCancel}
          cbOnChange={OnChange}
        />}
        {cardMode === 3 && <ItemEdit
          key={newItem.id}
          cardMode={cardMode}
          item={newItem}
          nameIsValid={false}
          priceIsValid={false}
          urlIsValid={false}
          countIsValid={false}
          cbSaveChanges={cbSave}
          cbCancelChanges={cbCancel}
          cbOnChange={OnChange}
        />}
      </div>
    )
}

export default Ishop;
