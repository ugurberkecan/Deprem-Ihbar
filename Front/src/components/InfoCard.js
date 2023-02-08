import React, { useEffect, useState } from 'react'

export default function InfoCard({data}) {

  return (
    <div className="info-card-main">
      {
        data.hosts.map((item) => 
          <div key={item._id}>
            <h3 className="info-fullname">{item.name}</h3>
            <p className="info-status">Durum: <span className="info-status-sub">{item.status}</span></p>
            <p>Tel: <span className="info-tel">{data.contactNo}</span></p>
          </div>
        )
      }
      <p className="info-description">{data.createdAt}</p>
      <p className="info-address"><span className="info-address-district">{data.neighborhood}</span> {data.name}</p>
      <p className="info-city">{data.city.name} / {data.city.districts[0]}</p>
    </div>
  )
}
