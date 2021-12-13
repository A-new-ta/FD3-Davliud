let Items = React.createClass({
    
    displayName: 'Items',

    // propTypes: {
    //     id: React.propTypes.string.isRequired,
    //     name: React.propTypes.string.isRequired,
    //     price: React.PropTypes.number.isRequired,
    //     urlItem: React.PropTypes.string.isRequired,
    //     count: React.PropTypes.number.isRequired,
        
    //     selectedItems: React.PropTypes.bool.isRequired, // выбран или нет, передается родителем
    //     cbSelect:React.PropTypes.func.isRequired, // cb выбора товара передается родителем
    //     cbDelete:React.PropTypes.func.isRequired, // cb удаления товара передается родителем
    // },

    // выбор товара
    selectedRow: function () {
        this.props.cbSelect(this.props.selectedItems ? '' : this.props.id);
    },

    // удаление товара
    deleteRow: function (eo) {
        let question = confirm('Удалить товар?');
        if (question) this.props.cbDelete(this.props.id);
        eo.stopPropagation();
    },

    render: function () {
        
        return React.DOM.tr({className: this.props.selectedItems ? 'ItemSelect' : 'Item', key: this.props.id, onClick: this.selectedRow},
            React.DOM.td({className: "ItemName"}, this.props.name),
            React.DOM.td({className: "ItemPrice"}, this.props.price),
            React.DOM.td({className: "ItemImage"},
                React.DOM.img({src: this.props.urlItem, alt: this.props.name})
            ),
            React.DOM.td({className: "ItemCount"}, this.props.count),
            React.DOM.td({className: "ItemAction"},
                React.DOM.input({type: "button", name: "deleteButton", className: "ItemButton", value: "delete", onClick: this.deleteRow })
            ),
        );
    }
});