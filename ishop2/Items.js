let Items = React.createClass({
    
    displayName: 'Items',

    propTypes: {
        items:React.PropTypes.arrayOf(
            React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string,
            price: React.PropTypes.number.isRequired,
            urlItem: React.PropTypes.string,
            count: React.PropTypes.number.isRequired,
          })
        ),
        selectedItems: React.PropTypes.bool.isRequired, 
        cbSelect: React.PropTypes.func.isRequired, 
        cbDelete: React.PropTypes.func.isRequired, 
            
    },

    selectedRow: function () {
        this.props.cbSelect(this.props.selectedItems ? '' : this.props.id);
    },

    deleteRow: function (eo) {
        this.props.cbDelete(this.props.id);
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