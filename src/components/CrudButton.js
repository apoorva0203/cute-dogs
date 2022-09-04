
import React, { useState } from "react";

const CrudButton = ({fetchNumber}) => {
  const [numberOfDogs, setNumberOfDogs] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setNumberOfDogs(e.target.value);
  }
  const fetch = () => {
    fetchNumber(numberOfDogs);
  }
  return (
    <>
    
        <div class="mt-8 space-y-6">
          <div class="flex items-center">
            <input type="text"  value={numberOfDogs} onChange={handleChange} required class="relative block w-full appearance-none rounded-b-md  rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
      
          </div>
          <button  onClick={fetch} class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Fetch !</button>
      
        </div>
    </>
  );
};

export default CrudButton;