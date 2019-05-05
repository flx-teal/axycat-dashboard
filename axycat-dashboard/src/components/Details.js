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
    this.state = {
      projectId: 'bP0TrDC4qkgp8KqXHOBI',
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
        <DetailsCardComponent data={this.state.dataProject} />
        <ListComponent data={this.state.dataProject} />
        <SignupCompponent />
        <FooterComponent />
      </div>
    );
  }
}
export default Detail;
