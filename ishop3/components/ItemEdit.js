import React from 'react';
import PropTypes from 'prop-types';

import './ItemEdit.css';

class ItemEdit extends React.Component {
 
    static PropTypes = {
        item: PropTypes.object.isRequired,
        cardMode: PropTypes.number.isRequired,
        nameIsValid: PropTypes.bool.isRequired,
        priceIsValid: PropTypes.bool.isRequired,
        urlIsValid: PropTypes.bool.isRequired,
        countIsValid: PropTypes.bool.isRequired,
        cbSaveChanges: PropTypes.func.isRequired,
        cbCancelChanges: PropTypes.func.isRequired,
        cbOnChange: PropTypes.func.isRequired,
    }

    state = {
        id: this.props.item.id,
        name: this.props.item.name,
        price: this.props.item.price,
        urlItem: this.props.item.urlItem,
        count: this.props.item.count,

        nameIsValid: this.props.nameIsValid,
        priceIsValid: this.props.priceIsValid,
        urlIsValid: this.props.urlIsValid,
        countIsValid: this.props.countIsValid,
    }

    editNameField = (eo) => {
        this.props.cbOnChange();
        this.setState({ name: eo.target.value });
        if (!eo.target.value || eo.target.value.length <= 5) {
            this.setState({ nameIsValid: false })
        } else {
            this.setState({ nameIsValid: true });
        }
    }

    editPriceField = (eo) => {
        this.props.cbOnChange();
        this.setState({ price: eo.target.value });
        let pattern = /^-?\d+\.?\d*$/;
        if (!eo.target.value || !pattern.test(eo.target.value) || eo.target.value <= 0) {
            this.setState({ priceIsValid: false })
        } else {
            this.setState({ priceIsValid: true });
        }
    }

    editUrlField = (eo) => {
        this.props.cbOnChange();
        this.setState({ urlItem: eo.target.value });
        let pattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!eo.target.value || !pattern.test(eo.target.value)) {
            this.setState({ urlIsValid: false })
        } else {
            this.setState({ urlIsValid: true });
        }
    }

    editCountField = (eo) => {
        this.props.cbOnChange();
        this.setState({ count: eo.target.value });
        let pattern = /^\d+$/;
        if (!eo.target.value || !pattern.test(eo.target.value)) {
            this.setState({ countIsValid: false })
        } else {
            this.setState({ countIsValid: true });
        }
    }

    saveChanges = () => {
        let newItem = {};
        newItem.id = this.state.id;
        newItem.name = this.state.name;
        newItem.price = this.state.price;
        newItem.urlItem = this.state.urlItem;
        newItem.count = this.state.count;
        this.props.cbSaveChanges(newItem);
    }

    cancelChanges = () => {
        this.props.cbCancelChanges();
    }

    render() {
        return <div>
            {this.props.cardMode === 2 && <h3>Edit existing product</h3>}
            {this.props.cardMode === 3 && <h3>Add new product</h3>}
            <div>
                <label>id: {this.props.item.id}</label>
            </div>
            <div className='FieldEdit'>
                <label>Name: </label>
                <input name='itemName' value={this.state.name} onChange={this.editNameField} />
                {(!this.state.nameIsValid) && <span className='ErrorField'>Please, fill the field. Value must be at least 5 characters</span>}
            </div>
            <div className='FieldEdit'>
                <label>Price: </label>
                <input name='itemPrice' value={this.state.price} onChange={this.editPriceField} />
                {(!this.state.priceIsValid) && <span className='ErrorField'>Please, fill the field. Value must be a rational number greater than 0</span>}
            </div>
            <div className='FieldEdit'>
                <label>URL: </label>
                <input name='itemURL' value={this.state.urlItem} onChange={this.editUrlField} />
                {(!this.state.urlIsValid) && <span className='ErrorField'>Please, fill the field. Value must be a valid URL</span>}
            </div>
            <div className='FieldEdit'>
                <label>Count: </label>
                <input name='itemCount' value={this.state.count} onChange={this.editCountField} />
                {(!this.state.countIsValid) && <span className='ErrorField'>Please, fill the field. Value must be a positive integer</span>}
            </div>
            <div>
                {this.props.cardMode === 2 && <input type='button' value='Save' onClick={this.saveChanges} disabled={!(this.state.nameIsValid && this.state.priceIsValid && this.state.urlIsValid && this.state.countIsValid)} />}
                {this.props.cardMode === 3 && <input type='button' value='Add' onClick={this.saveChanges} disabled={!(this.state.nameIsValid && this.state.priceIsValid && this.state.urlIsValid && this.state.countIsValid)} />}
                <input type='button' value='Cancel' onClick={this.cancelChanges}/>
            </div>
        </div>
    }
}

export default ItemEdit;
