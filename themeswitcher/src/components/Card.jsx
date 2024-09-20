import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
