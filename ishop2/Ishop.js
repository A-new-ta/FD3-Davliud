let IShop = React.createClass({

  displayName: 'IShop',
  
  propTypes: {
    items:React.PropTypes.arrayOf(
      React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string,
      price: React.PropTypes.number.isRequired,
      urlItem: React.PropTypes.string,
      count: React.PropTypes.number.isRequired,
    })
  )
  },
  
  
  getInitialState: function () {
    return {
      heads: ['Name', 'Price', 'URL', 'Quantity', 'Control'],
      selectedItemId: '',
      items: this.props.items,
    };
  },

  deleteItem: function (id) {
    if (confirm('Удалить товар?')) {
      this.setState({items: this.state.items.filter(v => v.id != id)})
    }
  },

  selectItem: function (id) {
    this.setState({ selectedItemId: id })
  },

  render: function () {
    let itemsHead = React.DOM.tr({},
      this.state.heads.map((v, i) => React.DOM.th({ key: i, className: 'ShopHead' }, v)));

    let itemTable = this.state.items.map(i =>
      React.createElement(Items, {
        key: i.id,
        id: i.id,
        name: i.name,
        price: i.price,
        urlItem: i.urlItem,
        count: i.count,
        selectedItems: i.id == this.state.selectedItemId,
        cbSelect: this.selectItem,
        cbDelete: this.deleteItem
      })
    );
    
    
    return React.DOM.div({className: "IShopcont"},
    React.DOM.div({className: "ShopName"}, this.props.name),
    React.DOM.table({className: "Ishop"},
        React.DOM.thead({}, itemsHead),
        React.DOM.tbody({}, itemTable)
    )
);
},
});





    
  
