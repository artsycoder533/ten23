import React from "react";
import { FaCheck } from "react-icons/fa";

interface PricingItemProps {
  detail: string;
  price?: string;
}

const PricingItem = ({ detail, price }: PricingItemProps) => {
  return (
    <p className="flex items-center gap-2 text-light text-gray-500 capitalize">
      <FaCheck className="text-hightlight" />
      {price ? `${detail}....$${price}` : detail}
    </p>
  );
};

export default PricingItem;
