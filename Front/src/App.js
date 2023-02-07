import React, { useState, useEffect } from 'react';
import InfoCardMap from './components/InfoCardMap';
import './App.css';

const BuildingTable = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/ihbar');
      const data = await res.json();
      setBuildings(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Bina Adı</th>
            <th>Sehir</th>
            <th>Mahalle</th>
            <th>Ulaşılmak İstenen Kişi</th>
            <th>İhbar Eden Tel No</th>
            <th>Durum</th>
            <th>İhbar Zamanı</th>
          </tr>
        </thead>
        <tbody>
          {buildings.map((building) => (
            <tr key={building._id}>
              <td>{building.name}</td>
              <td>{building.city.name}</td>
              <td>{building.neighborhood}</td>
              {building.hosts.map((host) => (
                <>
                  <td>{host.name}</td>
                  <td>{host.contactNo}</td>
                  <td>{host.status}</td>
                </>
              ))}
              <td>{new Date(building.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='card-info-container'>
        <InfoCardMap />
      </div>
    </div>
  );
};

export default BuildingTable;