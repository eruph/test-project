import React from 'react'; 
import './Item.css'
const Item = ({post, increment}) => {
  return(
  <div className="item">
    <div className="item-image">
      <img src={post.img} alt="Apple BYZ S8521"/>
    </div>
    <div className="item-body">
      <div className="right-data">
        <h2 className="item-title">{post.title}</h2>
        <div className="item-rating">
          <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z" fill="#FFCE7F"/>
          </svg>
          <p className='rating'>{post.rate}</p>
        </div>
      </div>
      <div className="left-data">
        <div className="price-container">
          <p className="item-price">{post.price} ₽</p>
          <p className="item-old-price">{post.discount}</p>
        </div>
        <button href="#" className="item-button" onClick={increment}>Купить</button>
      </div>
    </div>
  </div>
);
};
export default Item;