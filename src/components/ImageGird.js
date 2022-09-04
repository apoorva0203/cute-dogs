import useStore from '../utils/store';

import React, { useState } from "react";


const ImageGrid =  ({  item, i }) => {
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
          <div  class="flex justify-center items-center">
            <img alt={i} src={item} class="w-[15rem] h-[15rem] shadow-lg rounded-lg"></img>
          </div>
    </>
  );
};

export default ImageGrid;