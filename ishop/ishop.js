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
    
    
  render: function () {
    
    let allItems = [];

    let itemString =
      React.DOM.tr({ key: 0 },
        React.DOM.th(null, 'Название'),
        React.DOM.th(null, 'Цена, р'),
        React.DOM.th(null, 'Фото'),
        React.DOM.th(null, 'Количество на складе')
      );
    allItems.push(itemString);
      
    this.props.items.forEach(function (item) {
    itemString =
        React.DOM.tr({ key: item.id },
          React.DOM.td(null, item.name),
          React.DOM.td(null, item.price),
          React.DOM.td(null,
            React.DOM.img({ className: 'item_image', src: item.urlItem, alt: 'picture' })),
          React.DOM.td(null, item.count)
        );
      allItems.push(itemString);
    });

    return React.DOM.table({ className: 'Ishop' },
            React.DOM.caption({ className: 'caption' }, this.props.shop),
            React.DOM.tbody({ className: 'tablebody' }, allItems)
    )
  }
})
