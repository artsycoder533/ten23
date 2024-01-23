import React from 'react'
import PricingItem from './PricingItem';
import { alacarte } from '../utils/data';

const AlacartePricingCard = () => {
    const {details, priceItems} = alacarte;
    const {title, price, purpose, tag} = details;
  return (
    <div className="border flex flex-col gap-4 rounded-md p-8 shadow-md">
        {<span className={`self-center py-1 px-2 rounded-md h-8 ${tag ? 'bg-neutral' : ''}`}>{tag}</span>}
        <h3 className="text-2xl font-light text-center">{title}</h3>
        <p className="text-gray-500 text-center text-sm">{purpose}</p>
        <p className="text-3xl font-bold text-center text-accent mb-6">{`$${price}`}</p>
        {priceItems.map(detail => <PricingItem key={title} detail={detail.name} price={detail.price} />)}
    </div>
  )
}

export default AlacartePricingCard