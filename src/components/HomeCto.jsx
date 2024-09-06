import React from 'react';

const HomeCto = () => {
  return (
  <div className="relative isolate px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl py-5 sm:py-5 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Don't miss out!{' '}
              <a href="/shop" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Shop <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover 20 unique products.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover 20 unique products carefully chosen each week. This special collection is available at incredible prices for a limited time only. Don't miss out!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/shop"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                See all products
              </a>
             
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          
        </div>
      </div>
  );
};

export default HomeCto;