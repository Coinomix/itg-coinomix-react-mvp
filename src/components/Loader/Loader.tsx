import * as React from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#94CBFD"
          ariaLabel="ball-triangle-loading"
          wrapperClass=''
          wrapperStyle={{}}
          visible={true}
        />
      </div>
  )
}