import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTable, updateCell } from './actions/actions';
import Cell from './components/Cell';
import './App.css';

class App extends Component {

  state = {
    selected: null
  }

  createTable = (e) => {
    e.preventDefault();
    this.props.createTable(e.target.height.value, e.target.width.value)
  }

  updateCell = (rowNumber, columnNumber) => (value) => {
    this.props.updateCell(rowNumber, columnNumber, value)
  }

  onSelect = (id) => {
    this.setState({
      ...this.state,
      selected: id
    })
  }

  render() {
    const { table } = this.props;
    return (
      <div className="App">
        { 
          !table && 
          <form onSubmit={this.createTable}>
            <input type='number' min='1' name='height' defaultValue='50'/>
            <input type='number' min='1' name='width' defaultValue='50'/>
            <button type='submit'>Create Table</button>
          </form>
        }
        {
          table &&
          <table>
            <tr>
              {table[0].map((entry, columnNumber) => 
                <Cell
                  key={columnNumber}
                  data={entry}
                />)}
            </tr>
            {table.slice(1).map((row, rowNumber) => {
              rowNumber++;
              return (
                <tr>
                  {
                    row.map((entry, columnNumber) => {
                      const id = rowNumber * row.length + columnNumber;
                      return (
                        columnNumber === 0 ? 
                        <Cell
                          key={id}
                          data={entry}
                        /> :
                        <Cell
                          key={id}
                          data={entry}
                          id={id}
                          onUpdate={this.updateCell(rowNumber, columnNumber)}
                          onSelect={this.onSelect}
                          selected={id === this.state.selected}
                        /> 
                      )
                    })
                  }
                </tr>
              )
            }
            )}
          </table>
        }
      </div>
    );
  }
}
  
const mapStateToProps = state => ({
  table: state.table
})

const mapDispatchToProps = {
  createTable: createTable,
  updateCell: updateCell
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
