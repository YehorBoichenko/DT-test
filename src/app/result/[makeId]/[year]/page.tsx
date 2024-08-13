'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { fetchVehicleModels } from '@/api/api';

interface VehicleModel {
  Model_Name: string;
}

export default function ResultPage() {
  const { makeId, year } = useParams<{ makeId: string; year: string }>();
  const [vehicleModels, setVehicleModels] = useState<VehicleModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!makeId || !year) {
        setError('Make ID and Year are required.');
        setLoading(false);
        return;
      }

      try {
        const data = await fetchVehicleModels(makeId, year);
        setVehicleModels(data);
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

    fetchData();
  }, [makeId, year]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Go to Homepage
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Vehicle Models for {year}</h1>
      <ul className="list-disc pl-5">
        {vehicleModels.map((model, index) => (
          <li key={index} className="mb-2">
            {model.Model_Name}
          </li>
        ))}
      </ul>
    </div>
  );
}
