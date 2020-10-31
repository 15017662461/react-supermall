import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { debounce } from "./../../common/utils";
import {
  getDetail,
  getRecommend,
  Shop,
  Goods,
  GoodsParam,
} from "./../../network/detail";
import {connect} from 'react-redux'
import {addToCart} from './../../redux/actionCreators'

import DetailNavBar from "./childComps/DetailNavBar";
import Scroll from "./../../components/common/scroll/Scroll";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import "./Detail.css";


const mapState = (state) =>{
  return{
    cartList:state.cartList
  }
}
@connect(mapState,{addToCart})
@withRouter
class Detail extends Component {
  constructor(props) {
    super(props);
    this.scroll = React.createRef();
    this.state = {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      currentIndex: 0,
      imgLoad: null,
    };
  }
  render() {
    return (
      <div id="detail">
        <DetailNavBar
          titleClick={this.titleClick}
          clickBack={this.clickBack}
        ></DetailNavBar>
        <Scroll ref={this.scroll} probType={2} pullUpLoad={false}>
          <DetailSwiper
            topImages={this.state.topImages}
            imgLoad={this.state.imgLoad}
          ></DetailSwiper>
          <button onClick={this.addToCart}>加入购物车</button>
          <DetailBaseInfo goods={this.state.goods}></DetailBaseInfo>
          <DetailShopInfo shop={this.state.shop}></DetailShopInfo>
          <ul>
            <li>12</li>
            <li>12</li>
            <li>12</li>
            <li>12</li>
            <li>12</li>
          </ul>
        </Scroll>
      </div>
    );
  }

  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push("/home");
      return;
    }
    this.setState({ iid: this.props.location.state.iid });
    this.setState({ imgLoad: debounce(this.imgLoad, 1000) });
    // 请求商品信息
    getDetail(this.props.location.state.iid).then((res) => {
      // console.log(resp)
      const data = res.result;
      // 顶部轮播图
      this.setState({ topImages: data.itemInfo.topImages });
      // 商品信息
      this.setState({
        goods: new Goods(data.itemInfo, data.columns, data.shopInfo.services),
      });
      // 店铺信息
      this.setState({ shop: new Shop(data.shopInfo) });
      // 商品详情数据
      this.setState({ detailInfo: data.detailInfo });
      // 商品参数信息
      this.setState({
        paramInfo: new GoodsParam(data.itemParams.info, data.itemParams.rule),
      });
      // 评论信息
      if (data.rate.cRate !== 0) {
        this.setState({ commentInfo: data.rate.list[0] });
      }
    });

    // 请求推荐信息
    getRecommend().then((res) => {
      this.setState({ recommends: res.data.list });
    });
  }

  componentDidUpdate() {
    this.scrollRefresh();
  }

  titleClick = (index) => {
    // console.log(index)
    this.setState({ currentIndex: index });
  };

  loadMore = () => {
    console.log("loadMore");
  };

  clickBack = () => {
    this.props.history.push("/home");
    // console.log(this.props.history)
  };

  scrollRefresh = () => {
    this.scroll.current &&
      this.scroll.current.state.scroll &&
      this.scroll.current.state.scroll.refresh();
  };

  imgLoad = () => {
    this.scrollRefresh();
  };

  addToCart = () => {
    const product = {};
    product.image = this.state.topImages[0];
    product.title = this.state.goods.title;
    product.desc = this.state.goods.desc;
    product.price = this.state.goods.nowPrice;
    product.iid = this.state.iid;
    product.count = 1;
    // console.log(product)
    this.props.addToCart(product)
    // console.log(this.props.cartList)
  };
}

export default Detail;
