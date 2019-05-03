import React from 'react';
import IssuesPopUpDetails from "./IssuesPopUpDetails";

class IssuesTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
    };

    render() {
        return (
            <tr className="table-row table-row-render" >
                <td className="table-cell">
                    <input type='checkbox'/>
                </td>
                <td className="table-cell">1</td>
                <td className="table-cell"><span className="table-cell-priority"></span></td>
                <td className="table-cell table-name" onClick={this.handleClick}>Text in controls must have adequate contrast with their background</td>
                <td className="table-cell">
                    <select className='table-cell-select'>
                        <option value='inProgress'>In progress</option>
                        <option value='done'>Done</option>
                    </select>
                </td>
                <td className="table-cell"><span className="table-cell-asignee"></span></td>
                <td className="table-cell">28-04-2019</td>
                <td className=''>
                    {this.state.isClicked && <IssuesPopUpDetails handleClick={this.handleClick}/>}
                </td>
            </tr>


        )
    }
}

export default IssuesTableRow;