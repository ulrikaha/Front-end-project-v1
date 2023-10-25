     
     
     
     
     import React from 'react'
     
     function Date2() {
       return (



<div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
<div className="flex bg-white shadow-lg rounded-xl">
  <div className="flex flex-col">
    <div className="flex divide-x">
      <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <button
            className="flex items-center justify-center p-2 rounded-xl hover-bg-gray-50"
          >
            <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
              <path
                d="M13.25 8.75L9.75 12l3.5 3.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="text-sm font-semibold">February</div>
          <button
            className="flex items-center justify-center p-2 rounded-xl hover-bg-gray-50"
          >
            <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
              <path
                d="M10.75 8.75l3.5 3.25-3.5 3.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-7 text-xs text-center text-gray-900">
          <span
            className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
          >
            Mon
          </span>
          <span
            className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
          >
            Tue
          </span>
          <span
            className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
          >
            Wen
          </span>
          <span
            className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
          >
            Tur
          </span>
          <span
            className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
          >
            Fri
          </span>
          <span
            className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
          >
            Sat
          </span>
          <span
            className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
          >
            Sun
          </span>
          {/*More days... */}
        </div>
      </div>
      {/* Repeat the above structure for the second month..*/}
    </div>
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <input
          type="text"
          className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus-bg-white focus-ring-1 focus-ring-blue-600 focus-outline-none"
          placeholder="18 / 02 / 2021"
        />
        <div className="p-1">
          <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
            <path
              d="M6.738 12.012h10.5m-4.476 4.25l4.5-4.25-4.5-4.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus-bg-white focus-ring-1 focus-ring-blue-600 focus-outline-none"
          placeholder="11 / 03 / 2021"
        />
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-4 py-2 text-sm rounded-lg bg-gray-50 focus-outline-none focus-ring-1 focus-ring-blue-600 hover-bg-gray-100"
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg focus-outline-none focus-ring-1 focus-ring-blue-600 hover-bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</div>
</div>




        
        
       )
     }
     
     export default Date2
     
     