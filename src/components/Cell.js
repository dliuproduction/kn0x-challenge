import React, { PureComponent } from 'react'

export default class Cell extends PureComponent {

  handleSubmit = (e) => {
    const { onSelect, onUpdate } = this.props;
    e.preventDefault();
    onUpdate(e.target.cell.value);
    onSelect(null);
  }

  handleSelect = (e) => {
    const { onSelect, onUpdate, id } = this.props;
    e.preventDefault();
    onUpdate && onSelect(id);
  }

  componentDidMount() {
    const { onUpdate, selected } = this.props;
    onUpdate && selected && this.refs.cell.select();
  }

  render() {
    const { data, onUpdate, selected } = this.props;
    return (
      <td onClick={this.handleSelect}>
        { onUpdate && selected ?
          <form onSubmit={this.handleSubmit}>
            <input ref='select' type='text' name='cell' defaultValue={data}/>
          </form> :
          data
        }
      </td>
    )
  }
}