import React from 'react';

const CurvedArrow = ({ className = '', width = 70, height = 69, color = "#000" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 69.58 68.07"
      className={className}
    >
      <path 
        d="M69.5.49S22.38,8.43,7.66,64.36"
        style={{ 
          fill: 'none',
          stroke: color,
          strokeMiterlimit: 10 
        }}
      />
      <path 
        d="M.33,54.67s7.62,6.74,6.85,13.26c0,0,2.76-9.08,12.23-9.06"
        style={{ 
          fill: 'none',
          stroke: color,
          strokeMiterlimit: 10 
        }}
      />
    </svg>
  );
};

export default CurvedArrow;