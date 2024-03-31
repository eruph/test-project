import React, { useState } from "react";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";
import BasketCard from "../components/UI/Basket/BasketCard";
import './Basket.css'
import image from '../components/UI/Images/image.png'
function Basket() {
  const [state, setState] = useState(1)
  const [items, setItems] = useState([
    {
      img: image,
      title: "Apple BYZ S852I",
      price: 2927,
      rate: 4.7
  }
  ])
 
  return (
    <div className="basket">
      <div className="first-section">
        <Header className="header-comp" state={state} />
        <BasketCard items = {items[0]}  className="basket-comp"state={state} setState = {setState}/>
       </div>
       <Footer className="footer-comp"/>
      </div>
  );
}

export default Basket;