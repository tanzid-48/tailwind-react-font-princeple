import React, { use } from 'react';
import PricingCard from '../pricinsCard/PricingCard';
import DaysiPrising from '../daysiPricing/daysiPrising';

const PricingOption = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise)

    return (
        <div>
            <h2 className='text-5xl'>Get Our MemberShip</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {
                    // pricingData.map(pricing => <PricingCard key={pricing.id} pricing= {pricing}></PricingCard>)

                    pricingData.pricingPlans.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
                  
            </div>

          <h2 className='text-5xl'>Get Our MemberShip Daisy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {

                pricingData.pricingPlans.map(pricing => <DaysiPrising
                key={pricing.id}
                pricing={pricing}
                ></DaysiPrising>)


            }

          </div>
          
        </div>
    );
};

export default PricingOption;