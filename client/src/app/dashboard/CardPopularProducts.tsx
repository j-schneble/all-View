

import { ShoppingBag } from "lucide-react";
import React from "react";
import Rating from "../(components)/Rating";
import { useGetDashboardMetricsQuery } from "../state/api";


const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 shadow-md  rounded-2xl bg-white pb-16 ">
        {isLoading ? (
            <div className='m-5'>Loading... </div>
        ): (
            <>
            <h3 className='text-xl font-semibold text-black px-5 pt-4 py-4 pb-2'>
                Popular Products
            </h3>
            <hr />
          <div className="overflow-auto bg-white h-full">
            {dashboardMetrics?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex items-center text-black/80 justify-between gap-3 px-6 py-6 border-b border-gray-800/10"
              >
                <div className="flex items-center gap-3">


                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-semibold text-gray-900">
                      {product.name}
                    </div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-600 text-xs">
                        ${product.price}
                      </span>
                      <span className="mx-2">|</span>
                      <Rating rating={product.rating || 0} />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex items-center">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  {Math.round(product.stockQuantity / 1000)}k Sold
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
