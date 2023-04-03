import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {foodItems.map((item) => (
        <MenuItem
          description={item.description}
          foodImage={item.foodImage}
          isFavorite={item.isFavorite}
          itemName={item.itemName}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default MenuList;
