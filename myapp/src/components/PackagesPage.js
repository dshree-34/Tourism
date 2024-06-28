import React, { useState } from 'react';
import './Packages.css';
const packagesData = [
  {
    id: 1,
    destination: 'Paris',
    rate: '$100',
    imageUrl: 'https://i.ibb.co/tQ3LprJ/2.jpg',
  },
  {
    id: 2,
    destination: 'Dubai',
    rate: '$120',
    imageUrl: 'https://i.ibb.co/Czm8WPm/1.jpg',
  },
  {
    id: 3,
    destination: 'Bali',
    rate: '$800',
    imageUrl: 'https://i.ibb.co/MhY6bHK/3.jpg',
  },
  {
    id: 4,
    destination: 'Machu Picchu',
    rate: '$150',
    imageUrl: 'https://i.ibb.co/QFB7Xg2/55.jpg',
  },
  {
    id: 5,
    destination: 'Sydney',
    rate: '$110',
    imageUrl:'https://i.ibb.co/n8YsSbm/66.jpg',
  },
  {
    id: 6,
    destination: 'Maldives',
    rate: '$200',
    imageUrl: 'https://i.ibb.co/wK6RRVS/44.jpg',
  },
  {
    id: 7,
    destination: 'Rome, Italy',
    rate: '$150',
    imageUrl: 'https://i.ibb.co/fqknvBW/777.jpg',
  },
  {
    id: 8,
    destination: 'New York',
    rate: '$200',
    imageUrl: 'https://i.ibb.co/y5QpNM1/888.jpg',
  },
  {
    id: 9,
    destination: 'London, England',
    rate: '$180',
    imageUrl: 'https://i.ibb.co/NF0Y1zT/999.jpg',
  },
  {
    id: 10,
    destination: 'Bagan, Myanmar',
    rate: '$120',
    imageUrl: 'https://i.ibb.co/tZpky29/000.jpg',
  },
  {
    id: 11,
    destination: 'New Zealand',
    rate: '$250',
    imageUrl:'https://i.ibb.co/BtFX63z/011.jpg',
  },
  {
    id: 12,
    destination: 'Goa',
    rate: '$100',
    imageUrl: 'https://i.ibb.co/kc7hrm3/012.jpg',
  },
];

const PackagesPage = () => {
  const [packages, setPackages] = useState(packagesData);

  const handleCheckAvailability = (id) => {
     setPackages((prevPackages) =>
      prevPackages.map((pkg) =>
        pkg.id === id
          ? { ...pkg, availability: pkg.availability === 'Available' ? 'Limited' : 'Available' }
          : pkg
      )
    );
  };

  return (
    <div className="packages-page">
      <h1>Rate and Availability</h1>
      <div className="packages-container">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-item">
            <h3>{pkg.destination}</h3>
            <img src={pkg.imageUrl} alt={pkg.destination} className="package-image" />
            <div className="rate-availability">
              <div className="rate">Rate: {pkg.rate}</div>
            </div>
            <button onClick={() => handleCheckAvailability(pkg.id)}>Check Availability</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;