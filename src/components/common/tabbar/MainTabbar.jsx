import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import tabbarImg from './../../../assets/img/tabbar/index';
import TabbarItem from './TabbarItem'

@withRouter
class MainTabbar extends Component {
  render() {
    return (
      <div className="main-tab-bar" style={{display:'flex',justifyContent:'center'}}>
        <TabbarItem isActive={this.isActive("home")} path="/home" title="首页" 
        active={<img src={tabbarImg.home_active} alt="" />}
        deActive={<img src={tabbarImg.home} alt="" />} >
        </TabbarItem>

        <TabbarItem isActive={this.isActive("category")} path="/category" title="分类"
        active={<img src={tabbarImg.category_active} alt="" />}
        deActive={<img src={tabbarImg.category} alt="" />}>
        </TabbarItem>

        <TabbarItem isActive={this.isActive("cart")} path="/cart" title="购物车"
        active={<img src={tabbarImg.cart_active} alt="" />}
        deActive={<img src={tabbarImg.cart} alt="" />}>
        </TabbarItem>

        <TabbarItem isActive={this.isActive("profile")} path="/profile" title="我的"
        active={<img src={tabbarImg.profile_active} alt="" />}
        deActive={<img src={tabbarImg.profile} alt="" />}>
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
