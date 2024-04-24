import React from 'react'

const About = ({lawyer}) => {
  return (
    <div className="about bg-white rounded-[8px] p-8">
            <h2 className="text-[28px] font-bold text-[var(--details-head)]">النبذة التعريفية</h2>

            <p className="text-[var(--secondary-color)] text-[16px] font-[400] mt-4">{lawyer.about}</p>
          </div>
  )
}

export default About