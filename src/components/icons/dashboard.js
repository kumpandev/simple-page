import React from 'react';

export default props => {
  const style = {
    textIndent:0, 
    textTransform: "none", 
    direction:"ltr", 
    blockProgression: "tb", 
    baselineShift: "baseline", 
    color: "#000000", 
    enableBackground:"accumulate"
  };

  return (
    <svg 
      version="1.1" 
      x="0px" 
      y="0px" 
      viewBox="0 0 100 100"
      {...props}
    >
      <g transform="translate(0,-952.36218)">
        <path style={style} d="m 9.8000645,962.16172 38.2201295,0 0,25.94808 -38.2201295,0 0,-25.94808 z" fill="#000000" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
        <path style={style} d="m 52.019701,962.16172 38.180234,0 0,55.02088 -38.180234,0 0,-55.02088 z" fill="#000000" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
        <path style={style} d="m 9.8000645,992.10931 38.2201295,0 0,50.45329 -38.2201295,0 0,-50.45328 z" fill="#000000" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
        <path style={style} d="m 52.019701,1021.1832 38.180234,0 0,21.3794 -38.180234,0 0,-21.3794 z" fill="#000000" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
      </g>
    </svg>
  );
}