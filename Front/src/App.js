import React, { useState, useEffect } from 'react';
import InfoCardMap from './components/InfoCardMap';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const App = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/api/ihbar/yardim');
      console.log(res);
      const data = await res.json();
    };
    fetchData();
  }, []);

  
  const search = async (param) => {
    console.log(param)
    const response = await axios.get(`http://localhost:4000/api/ihbar/yardim/search?name=${param}`);
    setSearchData(response.data);
    setSearchParam(param);
    console.log(response.data)
  }

  return (
    <div>
      <div className="search-input-side">
        <Link to='/ilan-ekle'>
          <button className="publish-button">ILAN EKLE</button>
        </Link>
        <input className="search-input" placeholder='Arama' onChange={(e) => search(e.target.value)} />
      </div>
      <div className='card-info-container'>
        {
          <InfoCardMap searchDatas={searchData} searchParam={searchParam} />
        }
      </div>
    </div>
  );
};

export default App;
