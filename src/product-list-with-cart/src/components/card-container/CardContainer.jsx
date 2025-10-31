import React from 'react';

const CardContainer = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-lg">${product.price}</p>
          <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;