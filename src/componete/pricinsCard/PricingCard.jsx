import React from 'react';

const PricingCard = ({ pricing }) => {
    // console.log(pricing);
    return (
        <div className="">
            <div className=' flex flex-col border-2 p-4 bg-amber-600 rounded-3xl '>
                {/* Card Header */}
                <h2 className='text-5xl'>{pricing.name}</h2>
                <h4 className='text-3xl'>$ {pricing.price}/{pricing.duration}</h4>
                {/* Card Body */}
                <div className="bg-green-600  p-3 rounded-3xl mt-10 text-sm flex-1">
                    <p>{pricing.description}</p>
                </div>

                {
                    pricing.features.map((feature, index) => (<li key={index}> {feature}</li>
                    ))}


                {/* {
            pricing.features.map((feature, index) => (
  <div key={index} className="flex items-center gap-2 mb-1">
    <CircleCheckBig /> 
    <p>{feature}</p>
  </div>
))
        } */}

        


            </div>


<button className="btn w-full mt-1 rounded-2xl bg-gray-400 text-black">Subscribe</button>


        </div>


        //    <div
        //       className="card"
        //       style={{
        //         border: "1px solid #ddd",
        //         borderRadius: "8px",
        //         padding: "20px",
        //         width: "250px",
        //         boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        //       }}
        //     >
        //         <h1 className='text-2xl font-bold'>{pricing.name}</h1>
        //         <h2 className='text-xl mt-2'>${pricing.price} / {pricing.duration}</h2>
        //         <p className='mt-2'>{pricing.description}</p>
        //         <ul className='mt-2 list-disc list-inside'>
        //             {pricing.features.map((feature, index) => (
        //                 <li key={index}>{feature}</li>
        //             ))}
        //         </ul>
        //     </div>


    );
};

export default PricingCard;