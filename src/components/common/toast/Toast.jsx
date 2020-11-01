import React, { Component } from 'react';
import './Toast.css'

class Toast extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowing:false
    }
  }
  render() {
    return (
      <div className="main-toast">
        {
          this.state.isShowing ? 
          <div className="toast-item">
              <div style={{lineHeight:'60px',textAlign:'center'}}>
                {this.props.msg}
              </div>
          </div> 
          :
          null
        }
      </div>
      
    );
  }
  toShow = (time) =>{
    this.setState({ isShowing:true  });
    setTimeout(() =>{
      this.setState({ isShowing:false });
    },time)
  }
}

export default Toast;
