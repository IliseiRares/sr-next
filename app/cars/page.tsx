'use client'
import React, { useState, useEffect } from 'react';


interface Car {
  id: number;
  name: string;
}

const CarsPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: Car[] = await res.json();
        console.log('Fetched cars:', data); // Log fetched cars
        setCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCars();
  }, []);

  console.log('Current cars:', cars); // Log current cars state

  return (
    <>
      <h1>Cars</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CarsPage;
