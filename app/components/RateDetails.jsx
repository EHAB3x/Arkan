import React from 'react'
import star from "../../public/star.svg"
import Image from 'next/image';
const RateDetails = () => {
  return (
    <div className="rate__details bg-white rounded-[8px] p-8 flex flex-col">
        <div className="row-1 flex border-b-2 border-[var(--border-color)] pb-8">
            <div className="right w-[70%]">
            <div className="stars flex gap-1 mb-2">
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
            <p className="font-400 text-[16px] text-[var(--secondary-color)]">التقييم العام</p>
            <p className="font-400 text-[16px] text-[var(--secondary-color)]">“ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية</p>
            </div>

            <div className="left w-[30%] flex justify-center items-center flex-col">
                <div className="stars flex justify-center items-center gap-1 mb-2 bg-[#E2A03F] w-[60px] h-[40px] leading-[40px] rounded-[8px] mx-auto">
                    <p className="text-white text-[20px] font-[400]">5</p>
                </div>
                <p className="text-[18px] font-[400] text-[var(--secondary-color)]">تقييم الاستشاري</p>
            </div>
        </div>
    </div>
  )
}

export default RateDetails