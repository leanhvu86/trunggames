import React, { useEffect, useState } from 'react';

export default function LoadingSpinner() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  function onScroll() {
    // console.log(window.scrollY+window.innerHeight)
    // if (window.scrollY > 200){
    //     setHeight(window.scrollY);
    // }
  }

  return (
    <div className="spinner-container" style={{ height: height }}>
      <div className="loading-spinner" />
    </div>
  );
}

