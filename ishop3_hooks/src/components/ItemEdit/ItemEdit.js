import React, { useEffect, useState } from 'react';


import './ItemEdit.css';

function ItemEdit(props) {
 
   const [item, setItem] = useState({
        id: props.item.id || '',
        name: props.item.name || '',
        price: props.item.price || '',
        urlItem: props.item.urlItem || '',
        count: props.item.count || ''
    });

    const [validationFields, setValidationFields] = useState({
        name: !props.disabled,
        price: !props.disabled,
        urlItem: !props.disabled,
        count: !props.disabled
    });

    const [validationMessage, setValidationMessage] = useState({});
    const [disabled, setDisabled] = useState(props.disabled);

    useEffect(() => {
        setItem({ ...item, ...props.item });
    }, [props.item]);
    
    
    function editAllFields(eo) {
        props.cbOnChange();
        const name = eo.target.name;
        const value = eo.target.value;
        const messages = { ...validationMessage };
        const fields = { ...validationFields };


        switch (name) {
            case 'name':
                if (value.length <= 5) {
                    messages.name = 'Please, fill the field. Value must be at least 5 characters';
                    fields[name] = false;
                } else {
                    messages.name = '';
                    fields[name] = true;
                }
                break;
            case 'price':
                if (!/^-?\d+\.?\d*$/.test(value) || value <= 0) {
                    messages.price = 'Please, fill the field. Value must be a rational number greater than 0';
                    fields[name] = false;
                } else {
                    messages.price = '';
                    fields[name] = true;
                }
                break;
            case 'urlItem':
                if (!/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
                    messages.urlItem = 'Please, fill the field. Value must be a valid URL';
                    fields[name] = false;
                } else {
                    messages.urlItem = '';
                    fields[name] = true;
                }
                break;
            case 'count':
                if (!/^\d+$/.test(value)) {
                    messages.count = 'Please, fill the field. Value must be a positive integer';
                    fields[name] = false;
                } else {
                    messages.count = '';
                    fields[name] = true;
                }
        }

        setItem({ ...item, [name]: value });
        setValidationFields(fields);
        setValidationMessage(messages);
        setDisabled(Object.keys(fields).some(item => fields[item] === false));
    }
    

    function saveChanges () {
        const newItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            urlItem: item.urlItem,
            count: item.count
        };
        props.cbSaveChanges(newItem);
    }

    // function cancelChanges () {
    //     props.cbCancelChanges();
    // }

    
    return (
        <div>
            {props.cardMode === 2 && <h3>Edit existing product</h3>}
            {props.cardMode === 3 && <h3>Add new product</h3>}
            <div>
                <label>id: {props.item.id}</label>
            </div>

            <div className='FieldEdit'>
                <label>Name: </label>
                <input name='name' value={item.name} onChange={editAllFields} />
                <span className='ErrorField'>{validationMessage.name}</span>
            </div>

            <div className='FieldEdit'>
                <label>Price: </label>
                <input name='price' value={item.price} onChange={editAllFields} />
                <span className='ErrorField'>{validationMessage.price}</span>
            </div>

            <div className='FieldEdit'>
                <label>URL: </label>
                <input name='urlItem' value={item.urlItem} onChange={editAllFields} />
                <span className='ErrorField'>{validationMessage.urlItem}</span>
            </div>

            <div className='FieldEdit'>
                <label>Count: </label>
                <input name='count' value={item.count} onChange={editAllFields} />
                <span className='ErrorField'>{validationMessage.count}</span>
            </div>

            <div>
                {props.cardMode === 2 && <input type='button' value='Save' onClick={saveChanges} disabled={disabled} />}
                {props.cardMode === 3 && <input type='button' value='Add' onClick={saveChanges} disabled={disabled} />}
                <input type='button' value='Cancel' onClick={props.cbCancelChanges} />
            </div>
        </div>
    );
}

export default ItemEdit;
