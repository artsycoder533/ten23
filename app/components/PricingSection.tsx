import React from 'react'
import PricingCard from './PricingCard'

const PricingSection = () => {
  const priceList = [
    {
        title: 'Basic',
        price: '499',
        pageLength: '1 page',
        hosting: '5/mo.',
        tag: 'Budget Friendly',
        details: ['Hero section', 'About section', 'Services section', 'Contact section w/form', 'FAQ Accordian']
    },
    {
        title: 'Standard',
        price: '699',
        pageLength: 'up to 5 pages',
        hosting: '5/mo.',
        details: ['Home page', 'About page', 'Services page', 'Contact Page w/form & Google Map', 'FAQ Accordian'],
        tag: 'Most Popular',
    },
    {
        title: 'Advanced',
        price: '899',
        pageLength: '6 to 10 pages',
        hosting: '5/mo.',
        details: ['Home page', 'About page', 'Individual Service pages', 'Contact Page w/form & Google Map', 'FAQ Accordian'],
    },
    {
        title: 'E-Commmerce',
        price: '1199+',
        pageLength: '5+ Pages',
        hosting: '15/mo.',
        details: ['Home page', 'Products page', 'Individual product pages', 'Contact Page w/form & Google Map', 'FAQ Accordian'],
    }
  ]

  return (
    <section className="flex flex-col gap-16 p-32" id="pricing">
        <div className="flex flex-col gap-4">
        <h2 className="text-6xl text-center">Pricing</h2>
        <p className="text-center text-light text-gray-500">Quality services that dont break the bank!</p>
        </div>
        
        <div className="flex gap-4">
        {priceList.map(price => <PricingCard key={price.title} {...price}/>)}
        </div>
       
    </section>
  )
}

export default PricingSection