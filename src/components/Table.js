import React from 'react'
import TableRow from './TableRow';

function renderRows (numRows, numCols, newColor) {

    let rowArr = [] //arr of rows

    for(let i = 0; i < numRows; i++) {

        rowArr.push(<TableRow cols={numCols} color={newColor}/>)
    }
    return rowArr;
}

function Table(props) {

    let numRows = props.numRows;

    let numCols = props.numCols;

    let newColor = props.color;

    return (

        <table className="table">

            {renderRows(numRows, numCols, newColor)}
            
        </table>
    )
}

export default Table;