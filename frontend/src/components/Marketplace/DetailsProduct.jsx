import React from 'react';
import p2 from '../../assets/p2.jpg';

function DetailsProduct() {
  return (
    <div className="mt-5 p-5 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      {/* Product Image */}
      <div className="h-96 rounded-lg overflow-hidden">
        <img
          src={p2}
          alt="Guitar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="mt-5">
        {/* Product Name */}
        <h1 className="text-2xl font-bold text-gray-800">Guitar 2017</h1>

        {/* Description */}
        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          vitae.
        </p>

        {/* Price */}
        <p className="text-lg font-semibold text-green-600 mt-4">Price: 3000 DH</p>

        {/* Additional Details */}
        <div className="mt-6 space-y-2">
          <p className="text-gray-700">
            <span className="font-bold">City:</span> Casablanca
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Posted by:</span> John Doe
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Product Age:</span> 6 years
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Contact:</span> +212-6-1234-5678
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
