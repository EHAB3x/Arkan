import React from 'react'

const Services = ({services}) => {
    console.log("**********************************");
    console.log(services);
  return (
    <div className="flex flex-col gap-8 pt-8">
        {services.map((service)=>(
            <div className="service w-[90%] mx-auto flex flex-col bg-[var(--background-color)] p-8 rounded-[8px]" key={service.service_id}>
                <div className="content flex gap-8">
                    <div className="right">
                        <h3 className="font-bold text-[14px] text-[var(--details-head)] mb-3">{service.title}</h3>
                        <p className="font-normal text-[12px] text-[var(--secondary-color)]">{service.intro}</p>
                    </div>

                    <div className="left">
                        <p className="font-bold text-[12px] text-[var(--details-head)] mb-3 text-nowrap text-center">سعر الخدمة</p>
                        <p className="font-normal text-[24px] text-[var(--price-color)] text-nowrap">{service.ymtaz_price} ر.س</p>
                    </div>

                </div>
                <button className="mt-3 bg-[var(--primary-color)] h-[40px] text-white text-[16px] font-bold rounded-[12px]">طلب الخدمة</button>
            </div>
        ))}
    </div>
  )
}

export default Services