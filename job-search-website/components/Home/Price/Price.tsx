import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import PriceCard from './PriceCard'

function Price() {
  return (
    <div className='py-16'>
        <SectionHeading heading='Pricing Packages' subHeading='Choose the plan that fits your hiring needs and budget.'/>
        <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
            <div>
                <PriceCard type='Basic' price='199'/>
            </div>
            <div>
                <PriceCard type='Standard' price='399'/>
            </div>
            <div>
                <PriceCard type='Extended' price='799'/>
            </div>
        </div>
    </div>
  )
}

export default Price