import React from 'react'

export default function InfoCard() {

  const expData = {
    name: 'Eren Kurt',
    status: 'Bilinmiyor',
    description: '1 gundur haber alinamiyor',
    address: {
      province: 'Ankara',
      city: 'Cankaya',
      district: 'Karsiyaka Mahallesi',
      other: 'Daire 15 Cinar apartmani no 9'
    },
    contact: '90 545 567 23 23',
  }

  return (
    <div className="info-card-main">
      <h3 className="info-fullname">{expData.name}</h3>
      <p className="info-status">Durum: <span className="info-status-sub">{expData.status}</span></p>
      <p className="info-description">{expData.description}</p>
      <p className="info-address"><span className="info-address-district">{expData.address.district}</span> {expData.address.other}</p>
      <p>Tel: <span className="info-tel">{expData.contact}</span></p>
      <p className="info-city">{expData.address.province} / {expData.address.city}</p>
    </div>
  )
}
