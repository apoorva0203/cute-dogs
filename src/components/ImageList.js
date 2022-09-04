import useStore from '../utils/store';
import ImageGrid from './ImageGird';
import React from "react";


const ImageList =  ({data}) => {
  const loading = useStore((state) => state.loading);
  const hasErrors = useStore((state) => state.hasErrors);

  if (loading) {
    return <p>Loading</p>;
  }
  if (hasErrors) {
    return <p>cannot read </p>;
  }
  return (
    <>
      <div class="h-[600px] overflow-scroll">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[3rem]">
          {data && data.map((item,i) =>(
            <ImageGrid key={i} item={item} i={i}/>
          ) )}
        </div>
      </div>
    </>
  );
};

export default ImageList;