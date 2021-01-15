import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numRows: 2,
      numCols: 2,
      currColor: ''
      // default
    }
  }

  addRow = () => {
    // fcn to update the rows
    let exisitingRows = this.state.numRows;
    this.setState({
      numRows: exisitingRows + 1
    })
  }

  removeRow = () => {
    let existingRows=this.state.numRows;
    this.setState({
      numRows:existingRows-1
    })
  }

  addCol = () => {
    let exisitingCols = this.state.numCols;
    this.setState({
      numCols: exisitingCols + 1
    })
  }

  removeCol = () => {
    let existingCols=this.state.numCols;
    this.setState({
      numCols:existingCols-1
    })
  }
 

  render() {  
    return (

      <div className="App">
        {/* This class name gets updated in css file */}

        <h1>Update States using React JS</h1>
        {/* header */}

        <div className="buttons">
          {/* adding and removing rows and cols */}

        <button id="addRow" type="button" onClick={() => this.addRow()}>Add Row</button>

        <button id="removeRow" type="button" onClick={()=>this.removeRow()}>Remove Row</button>

        <button id="addColumn" type="button" onClick={() => this.addCol()}>Add Column</button>

        <button id="removeColumn" type="button" onClick={()=>this.removeCol()}>Remove Column</button>
        
        </div>
        {/* end of add and remove */}
        <br/>
        {/* space */}
        <div id="chooseColor">

          <p>Choose your color!</p>

          <select name="colors" id="colors" onChange={(event) => {
            this.setState({
              color: event.target.value
            })
          }}>

            <option value="white">White</option>
            {/* WEIRD BUG: default color d/n change unless you change color first, white being default can mask this! */}
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="green">Green</option>

          </select>
          {/* end of colors */}
        </div>
        {/* end of color selection */}
        <br/>
        {/* space */}
        
        <Table className="theTable" 
        numCols = {this.state.numCols} 
        numRows = {this.state.numRows}
        color = {this.state.color}
        ></Table>
        {/* changing table colors */}
      </div>
      // end of app
    );
    // end of return
  } 
// end of render
}
// end of class

export default App;