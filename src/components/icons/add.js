import React from 'react'

export default props => {
  const styles = {
    textIndent:0,
    textTransform: 'none',
    direction: 'ltr',
    blockProgression: 'tb', 
    baselineShift: 'baseline',
    color: '#000000',
    enableBackground: 'accumulate'
  }

  return (
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" {...props}>
      <g transform="translate(0,-952.36218)">
        <path 
          d="m 50,981.36219 c -1.1046,0 -2,0.89543 -2,2 l 0,17.00001 -17,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2 2,2 l 17,0 0,17 c 0,1.1046 0.8954,2 2,2 1.1046,0 2,-0.8954 2,-2 l 0,-17 17,0 c 1.1046,0 2,-0.8954 2,-2 0,-1.1046 -0.8954,-2 -2,-2 l -17,0 0,-17.00001 c 0,-1.10457 -0.8954,-2 -2,-2 z" 
          style={styles}
          fill="#000000" 
          fillOpacity="1" 
          stroke="none" 
          marker="none" 
          visibility="visible" 
          display="inline" 
          overflow="visible"
        />
      </g>
    </svg>
  )
}