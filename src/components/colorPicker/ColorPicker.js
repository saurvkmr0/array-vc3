import React, { useState, useEffect } from 'react';
import './ColorPicker.scss'; // Import SCSS file

const ColorPicker = () => {
  const [highlightColor, setHighlightColor] = useState('#86FF00'); // Default highlight color

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
      {/* <label htmlFor="colorPicker" className="color-label">
        🎨
      </label>
      <input
        id="colorPicker"
        type="color"
        value={highlightColor}
        onChange={handleColorChange}
      /> */}

    </div>
  );
};

export default ColorPicker;
