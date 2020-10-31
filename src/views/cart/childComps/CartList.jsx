import React, { Component } from 'react';
import CartListItem from './CartListItem'
import {connect} from 'react-redux'

const mapState = (state) => {
  return {
    cartList : state.cartList
  }
}
@connect(mapState)
class CartList extends Component {
  render() {
    return (
      <div>
        {
          this.props.cartList.map((item,index) => {
            return (
                <CartListItem itemInfo={item} key={index}></CartListItem>     
            )
          })
        }
        
      </div>
    );
  }
  
  componentDidMount(){
    console.log(this.props.cartList)
  }
}

export default CartList;
