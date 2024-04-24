import React from 'react'
import profile from "../../public/profile.png"
import crown from "../../public/crown.svg"
import verify from "../../public/verify.svg"
import quote from "../../public/quote.svg"
import star from "../../public/star.svg"
import Image from 'next/image';

const PersonalInfos = () => {
  return (
    <div className="personal__infos bg-white rounded-[8px] py-4 px-8">
        <h2 className="text-[28px] font-bold text-[var(--details-head)]">المعلومات الشخصية</h2>

        <div className="card flex rounded-[18px] bg-white py-4 gap-4" >
            <div className="img relative">
                <Image
                    src={profile}
                    alt="category-img"
                    width={120}
                    height={120}
                />
                <Image
                    src={verify}
                    width={20}
                    height={20}
                    alt="verify"
                    className="absolute right-[15px] top-0"
                />
            </div>
            <div className="details flex flex-col gap-2">
            <div className="lawyer__name flex gap-2 items-center">
                <h3 className="text-[var(--details-head)] text-[16px] font-bold">عبد العزيز عبد الرحمن الربعي</h3>
            </div>
            
            <div className="lawyer__about flex gap-2 items-center">
                <p className="text-[var(--secondary-text-color)] text-[14px] font-normal">مستشار قانوني</p>
                <Image
                    src={crown}
                    width={16}
                    height={16}
                    alt="crown"
                />
            </div>

            <div className="rating flex gap-1 items-center">
                {[...Array(5)].map((_,index)=>(
                    <Image
                    key={index}
                    src={star}
                    width={16}
                    height={16}
                    alt="star"
                    />
                ))}
                <p className="text-[16px] font-medium text-[var(--secondary-text-color)]">5.00  التقييم العام من 154 من العملاء</p>

            </div>

            <div className="quote mt-3 bg-[var(--background-color)] p-4 rounded-tl-[24px] rounded-br-[24px] flex flex-col gap-4">
                <div className="top flex gap-2">
                <Image
                    src={quote}
                    width={16}
                    height={16}
                    alt="star"
                />
                <p>تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية</p>
                </div>

                <div className="bottom flex justify-between">
                <div className="stars flex gap-1">
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

                <p className="font-[400] text-[12px] text-[var(--secondary-color)]">Abdullah Faleh</p>

                <p className="font-[400] text-[12px] text-[var(--secondary-color)]">الخميس 3 فبراير 2024</p>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default PersonalInfos