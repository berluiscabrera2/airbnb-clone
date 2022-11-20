import { Button } from '@mui/material'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>44 stays ⋅ 5 December to 16 December ⋅ 2 guest</p>
        <h1>Stays Nearby</h1>
        <div className='searchPage__infoBtns'>
          <Button>Cancellation Flexibility</Button>
          <Button>Type of Place</Button>
          <Button>Price</Button>
          <Button>Rooms and Beds</Button>
          <Button>More filters</Button>
        </div>
      </div>
      <SearchResult 
        img='https://a0.muscache.com/im/pictures/miso/Hosting-54005986/original/c16c3d5f-f1ce-45a2-81ac-fd9fe66ac540.jpeg?im_w=1200'
        location='Private room in center of Sydney'
        title='Stay at this spatious Modern Condo'
        description='2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · WiFi · Kitchen · Free Parking · Washing Machine'
        star={4.83}
        price='US$ 200 / night'
        total='US$ 2,200 total'
      />
      <SearchResult 
        img='https://a0.muscache.com/im/pictures/miso/Hosting-43819804/original/f31f5963-95bc-4adb-a5b4-f7fa106c9eb0.jpeg?im_w=1200'
        location='Luxury Apartment in Cabo'
        title='Modern apartment with  incredible view'
        description='2 guest · 1 bedroom · 1 bed · 2 shared bathrooms · Pool ·WiFi · Kitchen · Free Parking · Washing Machine'
        star={4.23}
        price='US$ 300 / night'
        total='US$ 3,300 total'
      />
      <SearchResult 
        img='https://a0.muscache.com/im/pictures/miso/Hosting-614691699143677918/original/d642ddc9-21ec-428b-84c2-3dbb243e6624.jpeg?im_w=1200'
        location='Montain Home in Colorado'
        title='Beautiful house in the mountains of Colorado'
        description='2-5 guest · 3 bedrooms · 4 beds · 4.5 shared bathrooms · WiFi · Kitchen · Washing Machine'
        star={4.91}
        price='US$ 250 / night'
        total='US$ 2,750 total'
      />
      <SearchResult 
        img='https://a0.muscache.com/im/pictures/72e3dfea-2b90-4afe-a1bd-1be37e77539a.jpg?im_w=1200'
        location='Snow Igloo at Finland'
        title='Beautiful Private Snow Igloo'
        description='2-3 guest · 1 bedrooms · 2 beds · 1.5 shared bathrooms · WiFi · Kitchen · Washing Machine'
        star={4.99}
        price='US$ 200 / night'
        total='US$ 2,200 total'
      />
    </div>
  )
}

export default SearchPage