import React from 'react'
import Card from './Card'
import './Home.css'
import Banner from './Banner'

function Home() {
  return (
    <div className='home'>
        <Banner/>
        <div className='home__section'>
          <Card
              src='https://a0.muscache.com/im/pictures/miso/Hosting-625488852744619092/original/cfe90235-5358-437c-8463-16ec33ebceb8.jpeg?im_w=1200'
              title='Online Experiences'
              description='Amazing activities to enjoy with great people.'
           />
          <Card
              src='https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=1200'
              title='Unique Stays'
              description='Beautiful places, unique stays. Visit our amazing fun places and enjoy.'
           />
          <Card
              src='https://a0.muscache.com/im/pictures/miso/Hosting-717134404264905813/original/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3.jpeg?im_w=1200'
              title='Entire Homes'
              description="Entire homes just for you and your loved ones, don't miss out on this opportunity."
           />
        </div>
        <div className='home__section'>
          <Card
              src='https://a0.muscache.com/im/pictures/8534b0f0-90ea-452e-a34f-2d261a8cff4b.jpg?im_w=1200'
              title='4 Bedroom Lake House'
              description='Rent this Vacation house in front of the Missisipi Lake.'
              price='US$ 353 / night'
           />
          <Card 
              src='https://a0.muscache.com/im/pictures/miso/Hosting-47448850/original/82d2e59c-b4c5-43ba-bead-94161da2d185.jpeg?im_w=1200'
              title='Amazing View at Villa Cristalina'
              description='Romantic villa to spend romantic nights with your partner.'
              price='US$ 250 / night'
          />
          <Card 
              src='https://a0.muscache.com/im/pictures/e92dac20-8a65-47a0-8a95-8049e2f8a748.jpg?im_w=1200'
              title='10-Acre Retreat'
              description='Inmerse yourself in the mountains of colorado in this beautiful house.'
              price='US$ 300 / night'
          />
        </div>
    </div>
  )
}

export default Home