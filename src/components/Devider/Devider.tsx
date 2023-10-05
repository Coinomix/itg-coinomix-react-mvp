import React from 'react';

interface Props {
  height?: string;
}

export const Devider: React.FC<Props> = ({height = '20px' }) => {

  return (
    <div style={{ height }}></div>
  );
};
