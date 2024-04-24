import React from 'react'
import Image from 'next/image';
import star from "../../public/star.svg"

const Rate = () => {
  return (
    <div className="rate bg-white rounded-[8px] p-8">
        <h2 className="text-[28px] font-bold text-[var(--details-head)] mb-4">تقييم العملاء:</h2>

        <div className="rates flex justify-between">
            <div className="col-1 flex justify-center flex-col">
            <div className="stars flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_,index)=>(
                <Image
                key={index}
                    src={star}
                    width={16}
                    height={16}
                    alt="star"
                />
                ))}
            </div>
            <p className="font-400 text-[16px] text-[var(--secondary-color)] text-center">التقييم العام</p>
            <p className="font-400 text-[16px] text-[var(--secondary-color)] text-center">من 154 من العملاء</p>
            </div>

            <div className="col-2 flex justify-center flex-col">
            <div className="stars flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_,index)=>(
                <Image
                key={index}
                    src={star}
                    width={16}
                    height={16}
                    alt="star"
                />
                ))}
            </div>
            <p className="font-400 text-[16px] text-[var(--secondary-color)] text-center">تقييم المنصة</p>
            </div>

            <div className="col-3 flex justify-center flex-col">
            <div className="stars flex justify-center gap-1 mb-2 bg-[#E2A03F] w-[60px] h-[40px] leading-[40px] rounded-[8px] mx-auto">
                <p className="text-white text-[20px] font-[400]">5/5</p>
            </div>
            <p className="font-400 text-[16px] text-[var(--secondary-color)] text-center">التقييم العام</p>
            <p className="font-400 text-[16px] text-[var(--secondary-color)] text-center">من 154 من العملاء</p>
            </div>

            
        </div>
    </div>
  )
}

export default Rate