import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import tabbarImg from './../../../assets/img/tabbar/index';
import TabbarItem from './TabbarItem'

@withRouter
class MainTabbar extends Component {
  render() {
    return (
      <div className="main-tab-bar" style={{display:'flex',justifyContent:'center'}}>
        <TabbarItem isActive={this.isActive("home")} path="/home" title="首页">
          <img src={tabbarImg.home} alt="" />
          <img src={tabbarImg.home_active} alt="" />
        </TabbarItem>
        <TabbarItem isActive={this.isActive("category")} path="/category" title="分类">
          <img src={tabbarImg.category} alt="" />
          <img src={tabbarImg.category_active} alt="" />
        </TabbarItem>
        <TabbarItem isActive={this.isActive("cart")} path="/cart" title="购物车">
          <img src={tabbarImg.cart} alt="" />
          <img src={tabbarImg.cart_active} alt="" />
        </TabbarItem>
        <TabbarItem isActive={this.isActive("profile")} path="/profile" title="我的">
          <img src={tabbarImg.profile} alt="" />
          <img src={tabbarImg.profile_active} alt="" />
        </TabbarItem>
      </div>
    );
  }
  isActive = (key) => {
    // console.log(this.props.history.location.pathname.indexOf(key))
    return this.props.history.location.pathname.indexOf(key) === 1
      ? true
      : false;
  };
}

export default MainTabbar;
