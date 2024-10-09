import React, { useState, useEffect } from 'react';
import './ColorPicker.scss'; // Import SCSS file

const ColorPicker = () => {
  const [highlightColor, setHighlightColor] = useState('#008f11'); // Default highlight color

  // Function to handle color changes
  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setHighlightColor(newColor);
    document.documentElement.style.setProperty('--highlight-color', newColor); // Update CSS variable
  };

  // Optional: Effect to set the CSS variable on mount
  useEffect(() => {
    document.documentElement.style.setProperty('--highlight-color', highlightColor);
  }, [highlightColor]);

  return (
    <div className="color-picker">
      <input
        type="color"
        value={highlightColor}
        onChange={handleColorChange}
      />
      {/* Uncomment for visual feedback */}
      {/* <div
        className="feedback"
        style={{ backgroundColor: highlightColor }} // For visual feedback
      >
        
      </div> */}
    </div>
  );
};

export default ColorPicker;
