import React, { Component } from 'react';
import DetailsCardComponent from './details-components/DetailsCardComponent';
import ListComponent from './details-components/ListComponent';
import SignupCompponent from './details-components/SignupComponent';
import FooterComponent from './details-components/FooterComponent';
import './Details.scss';
import { getReportFromCloudById } from '../config/fbConfig';

class Detail extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { reports } = {} } = {} } = props;
    this.state = {
      projectId: '',
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

  render() {
    return (
      <div className='details-wrapper'>
        {this.state.dataProject && (
          <>
            <DetailsCardComponent data={this.state.dataProject} />
            <ListComponent data={this.state.dataProject} />
            <SignupCompponent />
            <FooterComponent />
          </>
        )}
      </div>
    );
  }
}

export default Detail;
