import React from 'react'
import { FaCheck } from 'react-icons/fa'

interface PricingItemProps{
    detail: string;
}

const PricingItem = ({detail}: PricingItemProps) => {
  return (
    <p className="flex items-center gap-2 text-light text-gray-500"><FaCheck className="text-hightlight" />{detail}</p>
  )
}

export default PricingItem