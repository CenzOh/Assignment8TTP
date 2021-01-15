import React from 'react'
import TableCell from './TableCell'

function renderCols (numCol, newColor) {

    let colsArr = []

    for(let i=0; i < numCol; i++) {

        console.log("column added")

        colsArr.push(<TableCell color={newColor}/>)

    }
    return colsArr;
}

function TableRow(props) {

    let newColor = props.color;

    return (

        <tr className="row">

            {renderCols(props.cols, newColor)}
            
        </tr>
    ) 
}

export default TableRow;