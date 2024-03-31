import React, { useState } from 'react'; 
import Item from '../Item/Item';
import '../ItemList/ItemList.css'

const ItemList = ({items,title, increment}) => {
  
  return(
    <div className='item-list'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(post => 
          <Item increment = {increment} post={post}/>
          )}
      </div>
    </div>
);
};
export default ItemList;