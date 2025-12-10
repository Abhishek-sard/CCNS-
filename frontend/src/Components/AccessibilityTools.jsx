import React, { useState } from "react";
import AccessibilityPanel from "./AccessibilityPanel";

const AccessibilityTools = () => {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  const setStyle = (prop, value) => {
    document.documentElement.style.setProperty(prop, value);
  };

  const increaseText = () => {
    const size = fontSize + 10;
    setFontSize(size);
    setStyle("--base-font-size", `${size}%`);
  };

  const decreaseText = () => {
    const size = fontSize - 10;
    setFontSize(size);
    setStyle("--base-font-size", `${size}%`);
  };

  const grayScale = () => setStyle("filter", "grayscale(100%)");
  const highContrast = () => setStyle("filter", "contrast(180%)");
  const negativeContrast = () => setStyle("filter", "invert(100%)");
  const lightBackground = () => {
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
  };

  const underlineLinks = () => {
    document.querySelectorAll("a").forEach(a => a.style.textDecoration = "underline");
  };

  const readableFont = () => setStyle("font-family", "Arial, sans-serif");

  const reset = () => {
    setStyle("--base-font-size", "100%");
    setStyle("filter", "none");
    setStyle("font-family", "");
    document.body.style.background = "";
    document.body.style.color = "";
    document.querySelectorAll("a").forEach(a => a.style.textDecoration = "none");
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-teal-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-teal-700 transition z-[9999]"
      >
        ♿
      </div>

      {/* Panel */}
      {open && (
        <AccessibilityPanel
          increaseText={increaseText}
          decreaseText={decreaseText}
          grayScale={grayScale}
          highContrast={highContrast}
          negativeContrast={negativeContrast}
          lightBackground={lightBackground}
          underlineLinks={underlineLinks}
          readableFont={readableFont}
          reset={reset}
        />
      )}
    </>
  );
};

export default AccessibilityTools;
