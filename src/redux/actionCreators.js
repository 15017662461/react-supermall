import actionTypes from './actionTypes'

export const addToCart = (goods) => ({
  type:actionTypes.ADD_TO_CART,
  payload:{
    goods
  }
})