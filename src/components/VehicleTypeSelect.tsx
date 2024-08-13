'use client';
import React, { useEffect, useState } from 'react';
import { fetchVehicleTypes } from '@/api/api';

interface VehicleType {
  MakeName: string;
  MakeId: string;
}

interface VehicleTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const VehicleTypeSelect: React.FC<VehicleTypeSelectProps> = ({
  value,
  onChange,
}) => {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVehicleTypes = async () => {
      try {
        const data = await fetchVehicleTypes();

        setVehicleTypes(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    getVehicleTypes();
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMakeId = vehicleTypes.find(
      (type) => type.MakeName === event.target.value
    )?.MakeId;
    onChange(selectedMakeId || event.target.value);
  };

  return (
    <div>
      <label
        htmlFor="vehicleType"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Vehicle Type
      </label>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <select
          id="vehicleType"
          value={
            vehicleTypes.find((type) => type.MakeId === value)?.MakeName || ''
          }
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">Select Vehicle Type</option>
          {vehicleTypes.map((type, index) => (
            <option key={index} value={type.MakeName}>
              {type.MakeName}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
