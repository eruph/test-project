import React from 'react'; 
import '../PayCard/PayCard.css'


const PayCard = ({sum}) => {
  return(
    <div className='payCard'>
        <div className="first-line">
            <h2 className='final-sum'>ИТОГО</h2>
            <h3 className='sum'>₽ {sum}</h3>
        </div>
            <button className='payButton'>Перейти к оформлению</button>
    </div>
);
};
export default PayCard ;