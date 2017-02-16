import React, { Component } from 'react';
import GridComponent from './GridComponent';
import './App.css';

//react component as a stateless function for example purpose
const cElement = (props) => {
  return (
    <div>
      x:{props.data.x},
      y:{props.data.y}
    </div>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customElementsConfig: [{
        key: 'position',
        element: cElement
      }]
    };
  }
  render() {
    return (
      <div className="App">
        <GridComponent
          data={[{ name: 'neel', lastname: 'bommisetty', position: { x: 1, y: 1 } }, { a: 2, b: 3 }]}
          pageSize={1}
          customElements={this.state.customElementsConfig}
        >
        </GridComponent>
      </div>
    );
  }
}


export default App;
