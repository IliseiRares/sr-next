'use client' ;

import React, { useState } from 'react';


const AddToCart = () => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
  };
  

  return (
    <div>
      <button onClick={handleAddToCart}>
        {isAdded ? 'Added to cart' : 'Add to cart'}
      </button>
    </div>
  );
};

export default AddToCart;
