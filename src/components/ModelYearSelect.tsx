import React from 'react';

interface ModelYearSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const ModelYearSelect: React.FC<ModelYearSelectProps> = ({
  value,
  onChange,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2014 + 1 },
    (_, i) => currentYear - i
  );

  return (
    <div>
      <label
        htmlFor="modelYear"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Model Year
      </label>
      <select
        id="modelYear"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      >
        <option value="">Select Model Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};
