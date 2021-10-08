import React from 'react';
import Loader from 'react-loader-spinner';

export default function LoaderFnc() {
  return (
    <div className="loaderContainer">
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
}
