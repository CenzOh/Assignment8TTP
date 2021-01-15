import React from 'react'
export default class TableCell extends React.Component {
    constructor(props) {

        super(props); 

            this.state = {
                colorCell: ""
            };
        }

        pickColor = () => {

            this.setState({
                colorCell: this.props.color
            });
        }

        render() {

            return (
                <td className = 'cell'
                style={{backgroundColor: this.state.colorCell}}
                onClick={this.pickColor}/>
            )
        }
    }