import React from 'react';

export default function Instructions() {
    return (
      <div>
        <div className = "top-left-column">
          <p>Instructions: <br />
            Click on icons below or type in equation. Use "Enter" key or "=" button to calculte. 
            Will save up to 9 time stamped entries. Click 'c' or type "clear" to clear memory. 
            Click 'del' or the backspace key to delete the previous character. Incorrect equations 
            will return an "ERROR" message.<br /> 
          </p>
        </div>
        <div className = "second-top-left-column">
          <p>Helpful Pointers: <br /> 
          - Specify 'rad' (Radians) or 'deg' (Degrees) for trigonometirc expressions.<br /> 
          - Use parentheses! sqrt25 will return an error. sqrt(25) will return 5. <br />
          - 'log' stands for natural log. 'log10' is common log
          </p>
        </div>
      </div>
    )
  }
  

  
