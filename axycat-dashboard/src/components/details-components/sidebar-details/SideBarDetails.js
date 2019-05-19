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
      projectId: this.props.match.params.projectId || localStorage.getItem('createdProjectId'),
      dataProject: reports || null
    };
  }

  componentDidMount() {
    if (this.state.dataProject === null) {
      getReportFromCloudById(this.state.projectId).then(data =>
        this.setState({ dataProject: data })
      );
    }
  }
  componentWillUnmount() {
    this.setState({ dataProject: null });
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
