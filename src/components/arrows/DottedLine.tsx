import React from 'react';

const DottedLine = ({ className = '', width = 10, height = 62, color = "#f09e0e" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 9.22 61.65"
      className={className}
    >
      <defs>
        <style>
          {`.dotted-arrow-solid, .dotted-arrow-dashed {
            fill: none;
            stroke: ${color};
            stroke-miterlimit: 10;
          }
          .dotted-arrow-dashed {
            stroke-dasharray: 4.61 4.61;
          }`}
        </style>
      </defs>
      <path 
        className="dotted-arrow-solid" 
        d="M.39.32s.6.73,1.47,2.02"
      />
      <path 
        className="dotted-arrow-dashed" 
        d="M4.26,6.26c3.21,5.87,6.65,15.17,2.65,23.58C1.53,41.15.22,49.94,3.13,57.15"
      />
      <path 
        className="dotted-arrow-solid" 
        d="M4.12,59.24c.39.72.83,1.43,1.32,2.12"
      />
    </svg>
  );
};

export default DottedLine;