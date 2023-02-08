import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';

export default function InfoCard({ data }) {
console.log(data)
  return (
    <div className="info-card-main">
      <h3 className="info-fullname">{data.name}</h3>
      <p>Tel: <span className="info-tel">{data.phoneNumber}</span></p>
      <p className="info-city"> {data.city.districts} /  {data.city.name}</p>
      <p className="info-address"><span className="info-address-district">{data.neighborhood}</span></p>
      <p>Yardım Türü: <span className="info-tel">{data.type}</span></p>
      <p><span className="info-tel">{data.description}</span></p>
      <p className="info-description">Oluşturulma Tarihi:   <span className="info-tel"><Moment format="YYYY/MM/DD">{data.createdAt}</Moment></span></p>
    </div>
  )
}
