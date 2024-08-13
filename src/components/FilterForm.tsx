'use client';
import React, { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { VehicleTypeSelect } from '@/components/VehicleTypeSelect';
import { ModelYearSelect } from '@/components/ModelYearSelect';

export const FilterForm: React.FC = () => {
  const [vehicleType, setVehicleType] = useState<string>('');
  const [modelYear, setModelYear] = useState<string>('');
  const router = useRouter();

  const isFormValid = vehicleType && modelYear;

  const handleNext = () => {
    if (isFormValid) {
      router.push(`/result/${vehicleType}/${modelYear}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Filter Vehicles</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <form className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <div className="mb-4">
            <VehicleTypeSelect value={vehicleType} onChange={setVehicleType} />
          </div>
          <div className="mb-4">
            <ModelYearSelect value={modelYear} onChange={setModelYear} />
          </div>
          <button
            type="button"
            disabled={!isFormValid}
            onClick={handleNext}
            className={`w-full py-2 px-4 rounded text-white font-bold focus:outline-none focus:shadow-outline 
              ${isFormValid ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Next
          </button>
        </form>
      </Suspense>
    </div>
  );
};
