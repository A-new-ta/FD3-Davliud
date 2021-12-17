import React from 'react';
import PropTypes from 'prop-types';

import './IshopName.css';

class IshopName extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  
  render() {
    return <div className='IshopName'>{this.props.name}</div>;
  }

}

export default IshopName;
