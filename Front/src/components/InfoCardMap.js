import React from 'react'
import InfoCard from './InfoCard'

export default function InfoCardMap() {
  return (
    <div className="info-card-display-main">
      {
        Array(20).fill(9).map((item, i) => 
          <InfoCard />
        )
      }
    </div>
  )
}
