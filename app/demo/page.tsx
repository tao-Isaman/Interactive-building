import Link from 'next/link';

const buildings = [
  {
    id: 1,
    name: 'Building A',
    image: '/buildingA.jpg',
    type: 'Hotel',
    totalCO2: 1500,
  },
  {
    id: 2,
    name: 'Building B',
    image: '/buildingB.webp',
    type: 'Factory',
    totalCO2: 2500,
  },
  {
    id: 3,
    name: 'Building C',
    image: '/buildingC.webp',
    type: 'Mall',
    totalCO2: 1800,
  },
];

export default function Demo() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Demo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buildings.map((building) => (
          <div key={building.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={building.image} alt={building.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{building.name}</h2>
              <p className="text-gray-600 mb-1">Type: {building.type}</p>
              <p className="text-gray-600 mb-1">Total CO2 Detected: {building.totalCO2} ppm</p>
              <Link href={`/building/${building.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
