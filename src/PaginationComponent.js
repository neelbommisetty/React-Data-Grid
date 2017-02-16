import React, { Component } from 'react';

export default class PaginationComponent extends Component {
  render() {
    const options = [];
    for (let i = 0; i < this.props.numberOfPages; i++){
      options.push(<option key={i} value={i}>{i}</option>)
    }

    return (
      <select onChange={(e) => { this.props.pageChangeEventHandler(e) } }>
        {options}
      </select>
    );
  }

};
PaginationComponent.propTypes = {
  pageChangeEventHandler: React.PropTypes.func.isRequired,
  numberOfPages: React.PropTypes.number.isRequired
};