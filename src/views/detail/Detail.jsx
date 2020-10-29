import React, { Component } from 'react';
import {withRouter} from 'react-router-dom' 

@withRouter
class Detail extends Component {
  render() {
    return (
      <div>
        我是Detail
        {
          this.props.location.state.iid
        }
      </div>
    );
  }
}

export default Detail;
