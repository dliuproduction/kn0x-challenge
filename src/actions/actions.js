export const createTable = (height, width) => dispatch => {
  dispatch({
    type: 'CREATE_TABLE',
    height,
    width
  })
}

export const updateCell = (rowNumber, columnNumber, value) => dispatch => {
  dispatch({
    type: 'UPDATE_CELL',
    rowNumber,
    columnNumber,
    value
  })
}