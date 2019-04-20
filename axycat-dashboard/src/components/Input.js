import React, {Component} from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <label>
        <input props
               value={this.state.clientName} onChange={this.onInputChange}/>
      </label>
    );
  }
};