import axios from 'axios'
import Link from 'next/link';
import profile from "../../public/profile.png"
import crown from "../../public/crown.svg"
import star from "../../public/star.svg"
import verify from "../../public/verify.svg"
import Image from 'next/image';
const Lawyers = async() => {
    return (
        <div className="flex justify-center gap-[10%]">
            <div className="cards w-[75%] flex justify-center items-center flex-wrap gap-[30px]">
                {[...Array(6)].map((_,index)=>(
                    <Link href="/lawyers/lawyer">
                        <div 
                            className="card w-[282px] h-[270px] flex  flex-col justify-around items-center rounded-[18px] bg-white" 
                            key={index}
                        >
                            <div className="img">
                                <Image
                                    src={profile}
                                    alt="category-img"
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className="details text-center flex flex-col gap-2">
                                <div className="lawyer__name flex gap-2 items-center">
                                    <Image
                                        src={verify}
                                        width={16}
                                        height={16}
                                        alt="verify"
                                    />
                                    <h3 className="text-[var(--details-head)] text-[16px] font-bold">عبد العزيز عبد الرحمن الربعي</h3>
                                </div>
                                
                                <div className="lawyer__about flex gap-2 items-center justify-center">
                                    <p className="text-[var(--secondary-text-color)] text-[14px] font-normal">مستشار قانوني</p>
                                    <Image
                                        src={crown}
                                        width={16}
                                        height={16}
                                        alt="verify"
                                    />
                                </div>
                            </div>

                            <div className="rating flex gap-2 items-center justify-center">
                                <Image
                                    src={star}
                                    width={16}
                                    height={16}
                                    alt="verify"
                                />
                                <p className="text-[12px] font-medium text-[var(--details-head)]">4.56 (35 مراجعة)</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Lawyers