import useStore from '../utils/store';
import ImageList from './ImageList';
import CrudButton from './CrudButton';
import React, { useEffect, useState } from "react";

const FetchDogs = () => {
  const data = useStore((state) => state.data);
  const fetchData = useStore((state) => state.fetch);
  const [images, setImages] =useState([]);
  const[greaterValue,setGreaterValue] = useState(false);
  
  useEffect(() => {
      setImages(data.message);
  },[data]);

  const fetchNumber = (numberOfDogs) => {
    if(numberOfDogs <= 50){
      setGreaterValue(false);
      const api =  'https://dog.ceo/api/breeds/image/random'
      const url = api + "/" + numberOfDogs;
      fetchData(url);
    } else{
      setGreaterValue(true);
    }
  }
  
  return (
    <>
      <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white m-8 shadow-xl">
        <CrudButton fetchNumber={fetchNumber}/>
      </div>
      <div class="m-8 shadow-xl">
        {!greaterValue && <ImageList data={images}/>}
        {greaterValue && <div>Max number returned is 50. More info <a href="https://github.com/ElliottLandsborough/dog-ceo-api/pull/3" class="text-blue-600">here.</a></div>}
      </div>
    </>
  );
};

export default FetchDogs;