import React, { useEffect, useState }  from 'react';
import InfoCard from './InfoCard';
import axios from 'axios';

export default function InfoCardMap({searchDatas, searchParam}) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const FetchData = async (data) => {
      const response = await axios.get('https://deprem-ihbar-backend.vercel.app/api/ihbar/yardim');
      setDatas(response.data);
    }

    if(searchDatas.length > 0) {
      setDatas(searchDatas);
    } else if (searchDatas.length === 0 && searchParam.length === 0) {
      FetchData();
    } else {
      setDatas([]);
    }

  }, [searchDatas, searchParam]);

  return (
    <div className="info-card-display-main">
      {datas &&
        datas.slice(0).reverse().map((item, i) =>
          <InfoCard data={item} key={i} />
        )
      }
    </div>
  )
}
