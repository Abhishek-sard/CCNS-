import React from "react";

const AccessibilityPanel = ({ increaseText, decreaseText, grayScale, highContrast, negativeContrast, lightBackground, underlineLinks, readableFont, reset }) => {
  return (
    <div className="bg-white w-64 p-4 rounded-xl shadow-2xl border  animate-fade fixed right-20 bottom-5 z-45">
      <h3 className="text-lg font-bold text-gray-700 text-center">Accessibility</h3>

      <button onClick={increaseText} className="access-btn">Increase Text</button>
      <button onClick={decreaseText} className="access-btn">Decrease Text</button>
      <button onClick={grayScale} className="access-btn">Grayscale</button>
      <button onClick={highContrast} className="access-btn">High Contrast</button>
      <button onClick={negativeContrast} className="access-btn">Negative</button>
      <button onClick={lightBackground} className="access-btn">Light Background</button>
      <button onClick={underlineLinks} className="access-btn">Underline Links</button>
      <button onClick={readableFont} className="access-btn">Readable Font</button>

      <button
        onClick={reset}
        className="w-full py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default AccessibilityPanel;
