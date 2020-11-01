import actionTypes from './actionTypes'
const initState = {
  cartList:[]
}
// eslint-disable-next-line
export default (state = initState,action) => {
  switch(action.type){
    case actionTypes.ADD_TO_CART:
      const newState = JSON.parse(JSON.stringify(state));
      const goods = action.payload.goods;
      let product = null;
      if(newState.cartList.length !== 0){
        product = newState.cartList.find(item => {return item.iid === goods.iid });
        // console.log(product)
      }
      if(product){
        product.count = product.count + 1;
      }else{
        newState.cartList.push(goods);
      }
      return newState;
    default:
      return state
  }
}