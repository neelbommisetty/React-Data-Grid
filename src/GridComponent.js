import React, { Component } from 'react';
import Pagination from './PaginationComponent';

export default class GridComponent extends Component {
  constructor(props) {
    super(props);
    this.pageChangeHandler = this.pageChangeHandler.bind(this);
    const pageSize = this.props.pageSize || 10;
    const columns = this.props.columns || this.getColumns();
    const numberOfPages = this.props.data.length / pageSize;
    const customElements = this.props.customElements || [];
    const pageNumber = 0;
    this.state = {
      pageSize,
      columns,
      numberOfPages,
      pageNumber,
      customElements
    };
  }
  pageChangeHandler(e) {
    this.setState({
      pageNumber: e.target.value,
    });
  }
  getColumns() {
    let allKeys = new Set();
    this.props.data.forEach(row => {
      Object.keys(row).forEach(key => {
        allKeys.add(key);
      });
    });
    return [...allKeys];
  }
  getCustomElement(key) {
    const customElementObject = this.state.customElements.filter((element) => element.key === key)[0];
    return customElementObject['element'];
  }
  render() {
    const heading = this.state.columns.map((key, i) => <th key={i}> {key} </th>);
    const customElementKeys = this.state.customElements.map(element => element['key']);
    const rows = this.props.data.slice(this.state.pageSize*this.state.pageNumber,this.state.pageSize*(this.state.pageNumber+1)).map((row, i) => {
      const rowContent = this.state.columns.map((key, i) => {
        return <td key={i}>
          {(() => {

            if (row[key] && customElementKeys.indexOf(key)>-1) {
              const Element = this.getCustomElement(key);
              return <Element data={row[key]}/>
            }
            else if (typeof row[key] !== 'object') {
              return row[key] || '--'
            } else {
              return 'custom component required';
            }
          })()
          }
        </td>
      });
    return <tr key={i}>{rowContent}</tr>;
    });
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
            {heading}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <Pagination numberOfPages={this.state.numberOfPages} pageChangeEventHandler={this.pageChangeHandler} currentPage={this.state.pageNumber} />
      </div>
    )
  }
}
GridComponent.propTypes = {
  data: React.PropTypes.array.isRequired,
  pageSize: React.PropTypes.number,
  columns: React.PropTypes.array,
  customElements: React.PropTypes.array
}