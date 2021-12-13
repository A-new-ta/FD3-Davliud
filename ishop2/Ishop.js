let IShop = React.createClass({

  displayName: 'IShop',
  
  // propTypes: {
  //   shop: React.propTypes.string,
  //   items: React.propTypes.array,
  // },
  
  // начальные занчения 
  getInitialState: function () {
    return {
      heads: ['Name', 'Price', 'URL', 'Quantity', 'Control'],
      selectedItemId: '',
      items: this.props.items
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
    
    // Объединение в результирующий VDOM
    return React.DOM.div({className: "IShop"},
    React.DOM.div({className: "ShopName"}, this.props.name),
    React.DOM.table({className: "ShopProductTable"},
        React.DOM.thead({}, itemsHead),
        React.DOM.tbody({}, itemTable)
    )
);
},

});





    
  
