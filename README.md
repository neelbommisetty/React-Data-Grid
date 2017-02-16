# React-Data-Grid

## usage
```html
<div className="App">
  <GridComponent
    data={[{ name: 'neel', lastname: 'bommisetty', position: { x: 1, y: 1 } }, { a: 2, b: 3 }]}
    pageSize={1}
    customElements={this.state.customElementsConfig}
  >
  </GridComponent>
</div>
```
## options/props

### data
This is a required prop of type array. All the data that is to be rendered has to be passed in as prop `data`.
### pageSize
This is a prop of type number. This number decides number of rows to be rendered in a single page defaults to `10`.
### customElements
This is a prop of type array. This defines the custom element you want to render inside a cell.
The data required by the custom element to render is pass as a prop `data` to that custom element.
```javascript
this.state = {
  customElementsConfig: [{
    key: 'position',
    element: cElement
  }]
};

```
and use it in jsx
```html
<GridComponent
  data={[{ name: 'neel', lastname: 'bommisetty', position: { x: 1, y: 1 } }, { a: 2, b: 3 }]}
  pageSize={1}
  customElements={this.state.customElementsConfig}
>
</GridComponent>
```
## columns
This is a prop of type array. This defines the keys of columns that are to be rendered if specified any other keys that are not in this array will not be rendered.
defaults to all the keys available in data array of objects.