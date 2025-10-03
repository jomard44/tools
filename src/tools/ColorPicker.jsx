import { useState, useEffect } from "react";
import CopyButton from "../components/CopyButton";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const hex = Math.max(0, Math.min(255, n)).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default function ColorPicker() {
  const [color, setColor] = useState("#000000");
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });
  const [recentColors, setRecentColors] = useState([]);

  // Load recent colors from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("colorPicker.recentColors");
    if (saved) {
      setRecentColors(JSON.parse(saved));
    }
  }, []);

  // Update RGB when color changes
  useEffect(() => {
    const rgbValue = hexToRgb(color);
    if (rgbValue) {
      setRgb(rgbValue);
    }
  }, [color]);

  const handleRgbChange = (channel, value) => {
    const newRgb = { ...rgb, [channel]: parseInt(value) || 0 };
    setRgb(newRgb);
    setColor(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };

  const handleColorSelect = (newColor) => {
    setColor(newColor);

    // Add to recent colors
    const updated = [
      newColor,
      ...recentColors.filter((c) => c !== newColor),
    ].slice(0, 10);
    setRecentColors(updated);
    localStorage.setItem("colorPicker.recentColors", JSON.stringify(updated));
  };

  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Color Picker</h1>
        <p className="text-gray-600">
          Pick colors and convert between HEX and RGB formats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Color Picker
            </label>
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorSelect(e.target.value)}
              className="w-full h-16 cursor-pointer rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              HEX Value
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="flex-1 p-2 border rounded-md font-mono uppercase"
                pattern="^#[0-9A-Fa-f]{6}$"
              />
              <CopyButton text={color} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              RGB Values
            </label>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-xs text-gray-600">Red</label>
                <input
                  type="number"
                  value={rgb.r}
                  onChange={(e) => handleRgbChange("r", e.target.value)}
                  min="0"
                  max="255"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600">Green</label>
                <input
                  type="number"
                  value={rgb.g}
                  onChange={(e) => handleRgbChange("g", e.target.value)}
                  min="0"
                  max="255"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600">Blue</label>
                <input
                  type="number"
                  value={rgb.b}
                  onChange={(e) => handleRgbChange("b", e.target.value)}
                  min="0"
                  max="255"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                value={rgbString}
                readOnly
                className="flex-1 p-2 border rounded-md font-mono text-sm bg-gray-50"
              />
              <CopyButton text={rgbString} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Color Preview
            </label>
            <div
              className="w-full h-32 rounded-md border"
              style={{ backgroundColor: color }}
            />
            <div className="text-sm text-gray-600">
              Current color: {color} / {rgbString}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Recent Colors
            </label>
            <div className="grid grid-cols-5 gap-2">
              {recentColors.map((recentColor, index) => (
                <button
                  key={index}
                  onClick={() => handleColorSelect(recentColor)}
                  className="w-full aspect-square rounded-md border"
                  style={{ backgroundColor: recentColor }}
                  title={recentColor}
                />
              ))}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Tips</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Click on recent colors to reuse them</li>
              <li>• Use the color picker or enter values manually</li>
              <li>• Click copy buttons to copy values to clipboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
