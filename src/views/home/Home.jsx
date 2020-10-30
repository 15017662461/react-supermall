import React, { Component} from "react";
import { getHomeGoods, getHomeMultiData } from "./../../network/home";
import NavBar from "./../../components/common/navbar/NavBar.jsx";
import TabControl from "./../../components/content/tabControl/TabControl.jsx";
import Scroll from "./../../components/common/scroll/Scroll.jsx";
import HomeSwiper from "./Childcomps/HomeSwiper.jsx";
import RecommendView from "./Childcomps/RecommendView.jsx";
import Feature from "./Childcomps/Feature.jsx";
import GoodsList from "./../../components/content/goods/GoodsList.jsx";

import { debounce } from "./../../common/utils";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    props.cacheLifecycles.didCache(this.componentDidCache)
    props.cacheLifecycles.didRecover(this.componentDidRecover)
    this.state = {
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      banners: [],
      recommends: [],
      imgLoad: null,
      tabOffsetTop: 0,
      scrollY:0,
    };
    this.scroll = React.createRef();
    this.tab1 = React.createRef();
    this.tab2 = React.createRef();
  }
  render() {
    return (
      <div className="home">
        <div className="home-nav">
          <NavBar center={<div>购物街</div>}></NavBar>
        </div>
        <div
          className="tab-control-out"
          style={{ position: "fixed", zIndex: "10000", width: "100%" }}
        >
          <TabControl
            ref={this.tab1}
            titles={["流行", "新款", "热卖"]}
            titleClick={this.titleClick}
          ></TabControl>
        </div>
        <Scroll
          ref={this.scroll}
          probType={2}
          pullUpLoad={true}
          loadMore={this.loadMore}
        >
          <HomeSwiper
            banners={this.state.banners}
            imgLoad={this.imgLoad}
          ></HomeSwiper>
          <RecommendView recommends={this.state.recommends}></RecommendView>
          <Feature></Feature>
          <TabControl
            ref={this.tab2}
            titles={["流行", "新款", "热卖"]}
            titleClick={this.titleClick}
          ></TabControl>
          <GoodsList
            goods={this.state.goods[this.state.currentType].list}
            imgLoad={this.state.imgLoad}
          ></GoodsList>
        </Scroll>
      </div>
    );
  }

  componentDidMount() {
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
    this.getHomeMultiData();
    const imgLoad = debounce(this.imgLoad, 1000);
    this.setState({ imgLoad });
  }

  componentDidCache = () => {
    // console.log(this.scroll.current.state.scroll.y)  
    // this.setState({ scrollY:this.scroll.current.state.scroll.y  });
  }

  componentDidRecover = () => {
    // console.log(this.scroll.current.state.scroll)
    // window.location.reload();
    this.scrollScrollTo(0,this.state.scrollY)
    this.scrollRefresh();
  }

  // 获取首页banners等附加信息
  getHomeMultiData = () => {
    getHomeMultiData().then((resp) => {
      // console.log(resp)
      const banners = resp.data.banner.list;
      const recommends = resp.data.recommend.list;

      this.setState({ banners, recommends });
      // console.log(this.state.recommends)
    });
  };

  //获取商品列表
  getHomeGoods = (type) => {
    const page = this.state.goods[type].page + 1;
    getHomeGoods(type, page).then((res) => {
      const TypeList = this.state.goods[type].list;
      this.state.goods[type].list.push(...res.data.list);
      const goods = this.state.goods;
      goods[type].list = TypeList;
      goods[type].page = page;
      this.setState({ goods });
      // console.log(this.scroll.current.state.scroll.scrollTo(100,100))
    });
  };

  titleClick = (index) => {
    // console.log(index)
    switch (index) {
      case 0:
        this.setState({ currentType: "pop" });
        break;
      case 1:
        this.setState({ currentType: "new" });
        break;
      case 2:
        this.setState({ currentType: "sell" });
        break;
      default:
        this.setState({ currentType: "pop" });
        break;
    }
    this.tab1.current.state.currentIndex = index;
    this.tab2.current.state.currentIndex = index;
    // console.log(this.state.currentType)
  };

  imgLoad = () => {
    // console.log("imgLoad")
    this.scrollRefresh();
  };

  loadMore = () => {
    // console.log("loadMore")
    this.getHomeGoods(this.state.currentType);
  };

  scrollRefresh = () => {
    this.scroll.current && this.scroll.current.state.scroll.refresh();
  };

  scrollScrollTo = (x, y, time = 300) => {
    this.scroll.current && this.scroll.current.state.scroll.scrollTo(x, y, time);
  };

  scrollFinishPullUp = () => {
    this.scroll.current && this.scroll.current.state.scroll.finishPullUp();
  };

  setScrollY = (position) => {
    console.log(position)
    // this.setState({ scrollY:position.y });
  }
}
export default Home;
