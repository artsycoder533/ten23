// import React from "react";
// import { FaCheck } from "react-icons/fa";

// interface PricingItemProps {
//   detail: string;
//   price?: string;
// }

// const PricingItem = ({ detail, price }: PricingItemProps) => {
//   return (
//     <p className="flex items-center gap-2 text-light text-gray-500 capitalize">
//       <FaCheck className="text-accent" />
//       {price ? `${detail}......$${price}` : detail}
//     </p>
//   );
// };

// export default PricingItem;

import React from "react";
import { FaCheck } from "react-icons/fa";

interface PricingItemProps {
  detail: string;
  price?: string;
}

const PricingItem = ({ detail, price }: PricingItemProps) => {
  return (
    <p className="flex items-center justify-between text-light text-gray-500 capitalize border-b border-gray-300 pb-2">
      <span className="flex items-center gap-2">
        <FaCheck className="text-accent" />
        {detail}
      </span>
      {price && <span className="text-right font-semibold text-accent">${price}</span>}
    </p>
  );
};

export default PricingItem;
