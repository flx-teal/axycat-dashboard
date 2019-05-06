import React, { Component } from 'react';
import SdBrDetCardComponent from './SdBrDetCardComponent';
import ListComponent from '../ListComponent';
import '../../Details.scss';
import { getReportFromCloudById } from '../../../config/fbConfig';

class SideBarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: this.props.match.params.projectId,
      dataProject: ''
    };
  }

  componentDidMount() {
    getReportFromCloudById(this.state.projectId).then(data =>
      this.setState({ dataProject: data })
    );
  }

  render() {
    return (
      <div className='details-wrapper'>
        <SdBrDetCardComponent data={this.state.dataProject} />
        <ListComponent data={this.state.dataProject} />
      </div>
    );
  }
}
export default SideBarDetails;
