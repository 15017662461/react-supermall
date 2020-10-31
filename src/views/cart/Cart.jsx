import React, { Component } from 'react';
import NavBar from './../../components/common/navbar/NavBar'
import CartList from './childComps/CartList'
class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <NavBar center={<div>购物车</div>}></NavBar>
        <CartList></CartList>
      </div>
    );
  }
}

export default Cart;
