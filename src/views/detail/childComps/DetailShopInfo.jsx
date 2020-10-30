import React from 'react';
import './DetailShopInfo.css'

const DetailShopInfo = (props) => {
  return (
    <div>
      <div className="shop-info">
    <div className="shop-top">
      <img src={props.shop.logo} alt="" />
      <span className="title">{props.shop.name}</span>
    </div>
    <div className="shop-middle">
      <div className="shop-middle-item shop-middle-left">
        <div className="info-sells">
          <div className="sells-count">
            {props.shop.sells}
          </div>
          <div className="sells-text">总销量</div>
        </div>
        <div className="info-goods">
          <div className="goods-count">
            {props.shop.goodsCount}
          </div>
          <div className="goods-text">全部宝贝</div>
        </div>
      </div>
      <div className="shop-middle-item shop-middle-right">
        <table>
          {
            // console.log(props.shop.score)
            props.shop.score && props.shop.score.map((item,index) => {
              return <tr key={index}>
                <td>{item.name}</td>
            <td className="score" >{item.score}</td>
            <td className="better" ><span>{item.isBetter ? '高':'低'}</span></td>

              </tr>
            })
          }
        </table>
      </div>
    </div>
    <div className="shop-bottom">
      <div className="enter-shop">进店逛逛</div>
    </div>
  </div>
    </div>
  );
}

export default DetailShopInfo;
