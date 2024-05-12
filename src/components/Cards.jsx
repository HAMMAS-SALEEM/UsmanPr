import React from 'react'
import SingleCard from './SingleCard'
import rifle from '../assets/rifle.png'

const data = [
  { id: 1, name: 'ASSAULT RIFLE', img: rifle, purchased: false },
  { id: 2, name: 'ASSAULT RIFLE', img: rifle, purchased: false },
  { id: 3, name: 'ASSAULT RIFLE', img: rifle, purchased: false },
  { id: 4, name: 'ASSAULT RIFLE', img: rifle, purchased: false },
  { id: 5, name: 'ASSAULT RIFLE', img: rifle, purchased: true },
  { id: 6, name: 'ASSAULT RIFLE', img: rifle, purchased: false },
  { id: 7, name: 'ASSAULT RIFLE', img: rifle, purchased: false },
  { id: 8, name: 'ASSAULT RIFLE', img: rifle, purchased: true },
  { id: 9, name: 'ASSAULT RIFLE', img: rifle, purchased: false },
  { id: 10, name: 'ASSAULT RIFLE', img: rifle, purchased: false },
  { id: 11, name: 'ASSAULT RIFLE', img: rifle, purchased: false }
]

const Cards = () => {
  const handlePurchase = (e) => {
    const id = e.target.id;
    let updatedItem = data.find(item => item.id === +id)
    updatedItem.purchased = true;
    console.log(updatedItem, data)
  }
  return (
    <div className='cards-container'>
      {data.map(item => {
        return (
          <SingleCard
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            purchased={item.purchased}
            handlePurchase={handlePurchase}
          />
        )
      })}
    </div>
  )
}

export default Cards;
