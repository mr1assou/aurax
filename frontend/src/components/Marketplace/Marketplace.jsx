import React, { useState } from 'react';
import Products from './Products';
import Header from '../Header';

function Marketplace() {
    const [selectedCountry, setSelectedCountry] = useState("Argentina");
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState("");

    const handleChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleMinPriceChange = (e) => {
        const value = Math.max(100, parseInt(e.target.value) || 0); // Minimum value of 100 DH
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(parseInt(e.target.value) || ""); // Allow empty or numeric values
    };

    return (
         <div className='w-full  bg-black py-3 px-2 lg:py-5 lg:px-10 min-h-screen'>
            <Header />
            <p className="text-white mt-5">Filter by:</p>
            <div className="mt-2 flex gap-2 flex-wrap justify-center sm:justify-start sm:items-center sm:text-sm ">
                <select
                    value={selectedCountry}
                    onChange={handleChange}
                    className="bg-blight px-3 py-1 max:px-10 text-white block sm:h-[40px] mt-3 "
                >
                    <option value="Brazil" className="inline p-0 text-[3px]">categories</option>
                </select>
                <select
                    value={selectedCountry}
                    onChange={handleChange}
                    className="bg-blight px-3 py-1 max:px-10 text-white block sm:h-[40px] mt-3"
                >
                    <option value="Brazil" className="inline p-0 text-[3px]">city</option>
                </select>
                <select
                    value={selectedCountry}
                    onChange={handleChange}
                    className="bg-blight px-4 py-2 text-white block sm:h-[40px] mt-3 max:px-10"

                >
                    <option value="Brazil" className="inline p-0 text-[3px] ">brand</option>
                </select>
                <div className="flex flex-col text-white w-[40%] sm:w-[18%] max:w-[8%]  mt-2  sm:mt-0">
                    <label htmlFor="min-price" className="mb-1 ">Min Price:</label>
                    <input
                        type="number"
                        id="min-price"    
                        onChange={handleMinPriceChange}
                        className="bg-blight px-3 py-1 text-white block"
                        min="0"
                        value="0"
                    />
                </div>
                <div className="flex flex-col text-white w-[40%] sm:w-[18%] max:w-[8%] mt-2 sm:mt-0">
                    <label htmlFor="max-price" className="mb-1">Max Price:</label>
                    <input
                        type="number"
                        id="max-price"
                        value="0"
                        onChange={handleMaxPriceChange}
                        className="bg-blight px-3 py-1 text-white block"
                    />
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Marketplace;
