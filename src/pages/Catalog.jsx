import React, { useState } from "react";
import Header from "../components/UI/Header/Header";
import ItemList from "../components/UI/ItemList/ItemList";
import Footer from "../components/UI/Footer/Footer";
import image from "../components/UI/Images/image.png"
import image2 from "../components/UI/Images/image2.png"
import image3 from"../components/UI/Images/image3.png"
import image4 from "../components/UI/Images/Image (3).png"
import image5 from "../components/UI/Images/Image (4).png"
import image6 from "../components/UI/Images/Image (5).png"

function Catalog() {
  const [state,setState] = useState(1)
  const increment = () => {
    setState(state + 1);
  }
  const [items, setItems] = useState ([
    {
        img: image,
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        discount: '3527 ₽'
    },
    {
        img: image2,
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5
    },
    {
      img: image3,
      title: "Apple EarPods",
        price: 2327,
        rate: 4.5
    },
    {
        img: image,
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7
    },
    {
      img: image2,
      title: "Apple EarPods",
        price: 2327,
        rate: 4.5
    },
    {
      img: image3,
      title: "Apple EarPods",
        price: 2327,
        rate: 4.5
    }
])
const [wirItems, setWirItems] = useState([
    {
      img: image4,
      title: "Apple AirPods",
      price: 9527,
      rate: 4.7
  },
  {
    img: image5,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7
  },
  {
    img: image6,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7
  }
])
  return (
    <div>
      <Header state={state}/>
      <ItemList  increment = {increment} items = {items} title={'Наушники'}/>
      <ItemList  increment = {increment} items = {wirItems} title={'Беспроводные наушники'}/>
      <Footer/>
    </div>
  );
}

export default Catalog;