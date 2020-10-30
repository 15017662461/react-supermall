import React, { Component } from "react";
import BScroll from "better-scroll";
import PropTypes from "prop-types";
class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: null,
    };
  }
  static probeTypes = {
    probType: PropTypes.number.isRequired,
    pullUpLoad: PropTypes.bool.isRequired,
  };
  render() {
    return (
      <div className="wrapper">
        <div className="content">{this.props.children}</div>
      </div>
    );
  }

  componentDidMount() {
    const scroll = new BScroll(".wrapper", {
      probeType: this.props.probType,
      click: true,
      pullUpLoad: this.props.pullUpLoad,
      disableMouse: false,
      disableTouch: false,
    });
    scroll.on("scroll", (position) => {
      // this.props.setScrollY(position)
    });
    if (this.props.pullUpLoad) {
      scroll.on("pullingUp", () => {
        // console.log(1);
        this.props.loadMore();
        scroll.finishPullUp();
      });
    }
    this.setState({ scroll });
  }
}

export default Scroll;

