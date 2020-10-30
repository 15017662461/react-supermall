import React,{useState} from 'react';
import NavBar from "./../../../components/common/navbar/NavBar.jsx";
import commonImg from "./../../../assets/img/common/index.js";
import "./DetailNavBar.css";

const DetailNavBar = (props) => {
  const [currentIndex,setCurrentIndex] = useState(0);
  // eslint-disable-next-line
  const [titles,setTitles] = useState(["商品", "参数", "评论", "推荐"]);
  const titleClick = (index) => {
    setCurrentIndex(index)
    props.titleClick(index)
  }
  return (
    <div>
      <NavBar
          left={
            <div className="back">
              <img src={commonImg.back} alt="" onClick={props.clickBack}/>
            </div>
          }
          center={
            <div className="title">
              {titles.map((item, index) => {
                return (
                  <div
                    className={`title-item ${
                      index === currentIndex ? "active" : " "
                    }`}
                    key={index}
                    onClick={titleClick.bind(this, index)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          }
          right={<div></div>}
        ></NavBar>
    </div>
  );
  
}

export default DetailNavBar;
