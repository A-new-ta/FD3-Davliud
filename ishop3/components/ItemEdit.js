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
    }

    editNameField = (eo) => {

    }

    editPriceField = (eo) => {

    }

    editUrlField = (eo) => {

    }

    editCountField = (eo) => {

    }

    saveChanges = () => {

    }

    cancelChanges = () => {
        this.props.cbCancelChanges();
    }

    render() {
        return <div>
            
        </div>
    }
}
