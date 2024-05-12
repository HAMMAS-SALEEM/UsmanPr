import React, { useState } from 'react'

const SingleCard = ({ id, name, img, purchased, handlePurchase }) => {
  const [screenValue, setScreenValue] = useState(0)

  const incrementValue = () => setScreenValue(prev => prev + 1)
  const decrementValue = () =>
    screenValue != 0 && setScreenValue(prev => prev - 1);
  const handleValueChange = (value) => setScreenValue(value);

  return (
    <div>
      {purchased ? (
        <div className='card card-green'>
          <h3 className="purchased-dollar-sign">$</h3>
        </div>
      ) : (
        <div className='card'>
          <h2 className='card-name'>{name}</h2>
          <button className="purchase-button" type="button" onClick={handlePurchase}>
            <img src={img} alt={img} className='card-img' id={id} />
          </button>
          <div className='quantity-selector'>
            <button
              onClick={decrementValue}
              className='quantity-controller quantity-decreaser'
            >
              &lt;
            </button>
            <input className='quantity-screen' value={screenValue} onChange={handleValueChange} />
            <button
              onClick={incrementValue}
              className='quantity-controller quantity-increaser'
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleCard
