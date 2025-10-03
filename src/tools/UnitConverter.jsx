import { useState, useEffect } from "react";
import CopyButton from "../components/CopyButton";

const conversionTypes = {
  length: {
    name: "Length",
    units: [
      "meters",
      "kilometers",
      "miles",
      "yards",
      "feet",
      "inches",
      "centimeters",
    ],
    conversions: {
      meters: {
        meters: 1,
        kilometers: 0.001,
        miles: 0.000621371,
        yards: 1.09361,
        feet: 3.28084,
        inches: 39.3701,
        centimeters: 100,
      },
    },
  },
  weight: {
    name: "Weight",
    units: ["kilograms", "grams", "pounds", "ounces"],
    conversions: {
      kilograms: {
        kilograms: 1,
        grams: 1000,
        pounds: 2.20462,
        ounces: 35.274,
      },
    },
  },
  temperature: {
    name: "Temperature",
    units: ["celsius", "fahrenheit", "kelvin"],
    specialConversion: true,
  },
};

// Generate all conversion rates
Object.keys(conversionTypes).forEach((type) => {
  if (!conversionTypes[type].specialConversion) {
    const baseUnit = conversionTypes[type].units[0];
    const baseRates = conversionTypes[type].conversions[baseUnit];

    conversionTypes[type].units.forEach((fromUnit) => {
      if (!conversionTypes[type].conversions[fromUnit]) {
        conversionTypes[type].conversions[fromUnit] = {};
      }

      conversionTypes[type].units.forEach((toUnit) => {
        if (fromUnit === baseUnit) return;
        conversionTypes[type].conversions[fromUnit][toUnit] =
          baseRates[toUnit] / baseRates[fromUnit];
      });
    });
  }
});

function convertTemperature(value, fromUnit, toUnit) {
  // First convert to Celsius
  let celsius;
  switch (fromUnit) {
    case "celsius":
      celsius = value;
      break;
    case "fahrenheit":
      celsius = ((value - 32) * 5) / 9;
      break;
    case "kelvin":
      celsius = value - 273.15;
      break;
    default:
      return value;
  }

  // Then convert from Celsius to target unit
  switch (toUnit) {
    case "celsius":
      return celsius;
    case "fahrenheit":
      return (celsius * 9) / 5 + 32;
    case "kelvin":
      return celsius + 273.15;
    default:
      return celsius;
  }
}

export default function UnitConverter() {
  const [type, setType] = useState("length");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  // Set initial units based on type
  useEffect(() => {
    const units = conversionTypes[type].units;
    setFromUnit(units[0]);
    setToUnit(units[1]);
  }, [type]);

  // Perform conversion when inputs change
  useEffect(() => {
    if (!value || !fromUnit || !toUnit) {
      setResult("");
      return;
    }

    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult("Invalid number");
      return;
    }

    let converted;
    if (type === "temperature") {
      converted = convertTemperature(numValue, fromUnit, toUnit);
    } else {
      converted =
        numValue * conversionTypes[type].conversions[fromUnit][toUnit];
    }

    setResult(converted.toFixed(6));
  }, [value, fromUnit, toUnit, type]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Unit Converter
        </h1>
        <p className="text-gray-600">
          Convert between different units of measurement.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Conversion Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {Object.entries(conversionTypes).map(([key, { name }]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
            >
              {conversionTypes[type].units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
            >
              {conversionTypes[type].units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={result}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-50"
              placeholder="Result"
            />
          </div>
        </div>

        {result && (
          <div className="mt-4">
            <CopyButton
              text={`${value} ${fromUnit} = ${result} ${toUnit}`}
              className="w-full justify-center"
            />
          </div>
        )}
      </div>
    </div>
  );
}
