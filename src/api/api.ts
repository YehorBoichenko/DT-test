export async function fetchVehicleModels(makeId: string, year: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMEN}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle models');
  }

  const data = await response.json();
  return data.Results;
}
    export async function fetchVehicleTypes() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMEN}/vehicles/GetMakesForVehicleType/car?format=json`);
      const data = await response.json();
      return (data.Results);
    };