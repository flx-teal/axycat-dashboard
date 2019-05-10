import React, { Component } from 'react';
import SdBrDetCardComponent from './SdBrDetCardComponent';
import ListComponent from '../ListComponent';
import '../../Details.scss';
import { getReportFromCloudById } from '../../../config/fbConfig';

class SideBarDetails extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { reports } = {} } = {} } = props;
    this.state = {
      projectId: localStorage.getItem('createdProjectId'),
      dataProject: reports || null
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
        {this.state.dataProject && (
          <>
            <SdBrDetCardComponent data={this.state.dataProject} />
            <ListComponent data={this.state.dataProject} />
          </>
        )}
      </div>
    );
  }
}
export default SideBarDetails;
