import React from 'react'
import { FaCheck } from "react-icons/fa6";
import PricingItem from './PricingItem';

interface PricingCardProps  {
    title: string;
    price: string;
    pageLength: string;
    hosting: string;
    tag?: string;
    details: string[];
}

const PricingCard = ({title, price, pageLength, hosting, tag, details}: PricingCardProps) => {
  return (
    <div className="border w-72 flex flex-col gap-4 rounded-md p-10 shadow-md">
        {<span className={`self-center py-1 px-2 rounded-md h-8 ${tag ? 'bg-neutral' : ''}`}>{tag}</span>}

        <h3 className="text-2xl font-light text-center">{title}</h3>
        <p className="text-3xl font-bold text-center text-accent mb-6">{`$${price}`}</p>
        <PricingItem detail={pageLength} />
        {details.map(detail => <PricingItem key={title} detail={detail} />)}
        <PricingItem detail={`Hosting: $${hosting}`} />
    </div>
  )
}

export default PricingCard