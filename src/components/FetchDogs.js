import useStore from '../utils/store';
import ImageList from './ImageList';
import CrudButton from './CrudButton';
import React from "react";

const FetchDogs = () => {
  const data = useStore((state) => state.data);
  const fetchData = useStore((state) => state.fetch);
  const fetchNumber = (numberOfDogs) => {
    const url = 'https://dog.ceo/api/breeds/image/random/' + numberOfDogs;
    fetchData(url)
  }
  return (
    <>
      <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white m-8 shadow-xl">
       
        <CrudButton fetchNumber={fetchNumber}/>
        
      </div>
      <div class="m-8 shadow-xl">
      <ImageList data={data}/>
      </div>
    </>
  );
};

export default FetchDogs;