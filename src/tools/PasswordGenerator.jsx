import { useState } from "react";
import CopyButton from "../components/CopyButton";

const CHAR_SETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function generatePassword(length, options) {
  let chars = "";
  if (options.lowercase) chars += CHAR_SETS.lowercase;
  if (options.uppercase) chars += CHAR_SETS.uppercase;
  if (options.numbers) chars += CHAR_SETS.numbers;
  if (options.symbols) chars += CHAR_SETS.symbols;

  if (!chars) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Ensure at least one character from each selected set
  if (options.lowercase) {
    const pos = Math.floor(Math.random() * length);
    password =
      password.substring(0, pos) +
      CHAR_SETS.lowercase.charAt(
        Math.floor(Math.random() * CHAR_SETS.lowercase.length)
      ) +
      password.substring(pos + 1);
  }
  if (options.uppercase) {
    const pos = Math.floor(Math.random() * length);
    password =
      password.substring(0, pos) +
      CHAR_SETS.uppercase.charAt(
        Math.floor(Math.random() * CHAR_SETS.uppercase.length)
      ) +
      password.substring(pos + 1);
  }
  if (options.numbers) {
    const pos = Math.floor(Math.random() * length);
    password =
      password.substring(0, pos) +
      CHAR_SETS.numbers.charAt(
        Math.floor(Math.random() * CHAR_SETS.numbers.length)
      ) +
      password.substring(pos + 1);
  }
  if (options.symbols) {
    const pos = Math.floor(Math.random() * length);
    password =
      password.substring(0, pos) +
      CHAR_SETS.symbols.charAt(
        Math.floor(Math.random() * CHAR_SETS.symbols.length)
      ) +
      password.substring(pos + 1);
  }

  return password;
}

function calculateStrength(password) {
  if (!password) return 0;

  let strength = 0;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  if (hasLower) strength += 25;
  if (hasUpper) strength += 25;
  if (hasNumber) strength += 25;
  if (hasSymbol) strength += 25;

  if (password.length < 8) strength *= 0.5;
  else if (password.length >= 12) strength *= 1.25;

  return Math.min(100, Math.floor(strength));
}

function getStrengthColor(strength) {
  if (strength >= 80) return "bg-green-500";
  if (strength >= 60) return "bg-yellow-500";
  if (strength >= 40) return "bg-orange-500";
  return "bg-red-500";
}

function getStrengthLabel(strength) {
  if (strength >= 80) return "Strong";
  if (strength >= 60) return "Good";
  if (strength >= 40) return "Fair";
  if (strength > 0) return "Weak";
  return "None";
}

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleGenerate = () => {
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
  };

  const toggleOption = (option) => {
    // Prevent disabling all options
    const newOptions = { ...options, [option]: !options[option] };
    if (Object.values(newOptions).some((v) => v)) {
      setOptions(newOptions);
    }
  };

  const strength = calculateStrength(password);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Password Generator
        </h1>
        <p className="text-gray-600">
          Generate secure passwords with custom requirements.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 max-w-2xl">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Generated Password
          </label>
          <div className="flex gap-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              readOnly
              className="flex-1 p-2 border rounded-md font-mono bg-gray-50"
              placeholder="Click generate to create password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
            <CopyButton text={password} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>6</span>
            <span>32</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Character Types
          </label>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={options.lowercase}
                onChange={() => toggleOption("lowercase")}
                className="rounded text-blue-600"
              />
              <span className="text-sm text-gray-700">Lowercase (a-z)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={options.uppercase}
                onChange={() => toggleOption("uppercase")}
                className="rounded text-blue-600"
              />
              <span className="text-sm text-gray-700">Uppercase (A-Z)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={options.numbers}
                onChange={() => toggleOption("numbers")}
                className="rounded text-blue-600"
              />
              <span className="text-sm text-gray-700">Numbers (0-9)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={options.symbols}
                onChange={() => toggleOption("symbols")}
                className="rounded text-blue-600"
              />
              <span className="text-sm text-gray-700">Symbols (!@#$%^&*)</span>
            </label>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Generate Password
        </button>

        {password && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Password Strength: {getStrengthLabel(strength)}
              </label>
              <span className="text-sm text-gray-500">{strength}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all ${getStrengthColor(
                  strength
                )}`}
                style={{ width: `${strength}%` }}
              />
            </div>
            <ul className="text-sm text-gray-600 space-y-1 mt-4">
              <li>• Use at least 12 characters for strong passwords</li>
              <li>• Mix different character types for better security</li>
              <li>• Avoid using personal information</li>
              <li>• Use unique passwords for each account</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
