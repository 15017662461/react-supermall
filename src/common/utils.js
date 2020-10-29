//防抖函数
export const debounce = (func, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  }
}

// 节流函数
export const throttle = (func,delay) => {
  let timer;
  return function(){
    let context = this;
    let args = arguments;
    if(!timer){
      timer = setTimeout(() => {
        func.apply(context,args);
      },delay);
    }
  }
}