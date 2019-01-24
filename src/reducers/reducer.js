const createTable = (height, width) => {
  var table = [];
  var columnHeader = ['']
  for (var i = 0; i < width; i++) {
    columnHeader.push(`column ${i}`);
  }
  table.push(columnHeader);
  for (var j = 0; j < height; j++) {
    var row = [`row ${j}`];
    for (var k = 0; k < width; k++) {
      row.push('');
    }
    table.push(row);
  }
  return table;
}

const updateCell = (table, rowNumber, columnNumber, value) => {
  var newTable = [...table];
  newTable[rowNumber][columnNumber] = value;
  return newTable;
}

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_TABLE':
      return {
        ...state,
        table: createTable(action.height, action.width)
      }
    case 'UPDATE_CELL':
      return {
        ...state,
        table: updateCell(state.table, action.rowNumber, action.columnNumber, action.value)
      }
    default:
      return state
  }
}