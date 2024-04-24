import React from 'react'
import axios from 'axios'
import PersonalInfos from '@/app/components/PersonalInfos'
import About from '@/app/components/About';
import Rate from '@/app/components/Rate';
import RateDetails from '@/app/components/RateDetails';
import Services from '@/app/components/Services';
const Lawyer =async () => {
  const response = await axios.get("https://ymtaz.sa/api/client/lawyer/5218",{
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4`
  }
  })

  const lawyer = await response.data.data.lawyer;
  const services = await lawyer.services;
  return (
    <div className="flex justify-center pb-8">
      <div className="lawyer w-[90%] flex justify-between flex-col  flex-wrap gap-[30px] md:flex-row">
        <div className="right w-[100%] md:w-[55%] flex flex-col gap-8">
          <PersonalInfos />

          <About lawyer={lawyer}/>

          <Rate />

          <div className="rates">
            <RateDetails />
            <RateDetails />
          </div>
        </div>

        <div className="left w-[100%] md:w-[40%] bg-white rounded-[8px] py-4 px-8 h-fit">
          <h2 className="text-[28px] font-bold text-[var(--details-head)] mb-4">معلومات الحجز</h2>

          <div className="top border-b-2 border-[var(--border-color)]">
            <h3 className="w-fit mx-auto text-[20px] font-bold text-[var(--details-nav)] border-b-2 border-[var(--details-nav)] pb-2">أسعار الخدمات</h3>
          </div>

          <div className="bottom">
            <Services services={services}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lawyer