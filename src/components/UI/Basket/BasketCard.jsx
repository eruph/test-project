import React, { useState } from 'react'; 
import '../Basket/BasketCard.css'
import BuyCard from '../BuyCard/BuyCard';
import PayCard from '../PayCard/PayCard';

const BasketCard = ({state, setState, items}) => {
  const [sum, setSum] = useState(2927)
  const plus = () => {
    setSum(sum + 2927)
    setState(state + 1)
  }
  const minus = () => {
    if(state <= 1){
      console.log('error')
    }
    else{
      setSum(sum - 2927)
      setState(state - 1)
    }
  }
  
  return(
    <div className='basketCard'>
        <h2 className='basket-title'>Корзина</h2>
        <div className="payForm">
          <BuyCard items = {items} state = {state} plus = {plus} minus = {minus} sum = {sum}/>
          <PayCard sum = {sum}/>
        </div>
    </div>
);
};
export default BasketCard;