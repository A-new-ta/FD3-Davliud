'use strict'
let Filter = React.createClass({
  displayName: "Filter",

  propTypes: {
    list: React.PropTypes.array,
  },

  getInitialState: function () {
    return {
      filtered: '',
      isSort: false,
      list: this.props.list,
    }
  },

  isChecked: function (eo) {
    this.setState({ isSort: eo.target.checked }, this.processList);
  },

  searchText: function (eo) {
    this.setState({ filtered: eo.target.value }, this.processList)
  },

  processList: function () {
    let result = this.props.list;
    if (this.state.filtered) {
      result = result.filter(v => v.toLowerCase().indexOf(this.state.filtered.toLowerCase()) !== -1)
    };
    
    if (this.state.isSort) {
      result = result.slice().sort()
    }

    this.setState({ list: result });
  },

  resetList: function () {
    this.setState({ list: this.props.list });
    this.setState({ filtered: '' });
    this.setState({ isSort: false });
  },

  render: function () {

    let resCode = [];

    this.state.list.forEach( i => {
      let item = React.DOM.option({ key: i }, i)
      resCode.push(item)
    });

    return React.DOM.div({ className: 'Filter' },
      React.DOM.input({ type: 'checkbox', checked: this.state.isSort, onClick: this.isChecked }),
      React.DOM.input({ type: 'text', value: this.state.filtered, onChange: this.searchText }),
      React.DOM.input({ type: 'button', value: 'сброс', className: 'reset', onClick: this.resetList }),
    
      React.DOM.form(null,
        React.DOM.select({ className: 'select', size: 2, }, resCode)))
  },
});



