import React from 'react';
import './Item.css';

function Item(props) {

    function selectedRow() {
        if (props.blockChange !== true)
        props.cbSelect(props.id);
    }

    function editRow(eo) {
        eo.stopPropagation();
        props.cbEdit(props.id);
    }

    function deleteRow(eo) {
        eo.stopPropagation();
        if (confirm('Do you want to delete the item?')) props.cbDelete(props.id);
    }

    return (
            <tr className={props.selectedItems ? 'ItemSelect' : 'Item'}
                key={props.id}
                onClick = {selectedRow}>
                <td className='ItemName'>{props.name}</td>
                <td className='ItemPrice'>{props.price}</td>
                <td className='ItemImage'>
                    <img src={props.urlItem} alt={props.name}></img>
                </td>
                <td className='ItemCount'>{props.count}</td>
                <td className='ItemAction'>
                    <input type='button' className='ItemButton' value='Edit' disabled={props.blockChange} onClick={editRow}/>
                    <input type='button' className='ItemButton' value='Delete' disabled={props.buttonMode} onClick={deleteRow}/>
                </td>
            </tr>
            );
}


export default Item;
        
        

    
    
    

    

    