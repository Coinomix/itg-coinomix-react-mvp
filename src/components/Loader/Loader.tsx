import * as React from 'react';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader">
      <Oval
        height={100}
        width={100}
        color="#90E2F1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4F8089"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      </div>
  )
}