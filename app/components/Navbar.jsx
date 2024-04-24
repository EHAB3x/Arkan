"use client";
import React from 'react'
import logo from "../../public/logo.png"
import toggle from "../../public/Burger.svg"
import Image from 'next/image'
import { useState } from 'react';
const Navbar = () => {
    const [showToggle, setShowToggle] = useState(false)
  return (
    <nav className="flex justify-around items-center py-8">
        <div className="logo">
            <Image src={logo} alt="logo" />
        </div>

        <div className={`links ${showToggle? "show" :""}`}>
            <ul className="flex gap-[15px]">
                <li className="text-[var(--nav-text-color)] font-bold text-[16px] leading-[16px]">
                    الرئيسية
                </li>
                <li className="text-[var(--nav-text-color)] font-bold text-[16px] leading-[16px]">
                    من نحن
                </li>
                <li className="text-[var(--nav-text-color)] font-bold text-[16px] leading-[16px]">
                    اتصل بنا
                </li>
                <li className="text-[var(--nav-text-color)] font-bold text-[16px] leading-[16px]">
                    الدعم الفنى
                </li>
                <li className="text-[var(--nav-text-color)] font-bold text-[16px] leading-[16px]">
                    أرقام التشغيل
                </li>
                <li className="text-[var(--nav-text-color)] font-bold text-[16px] leading-[16px]">
                    سياسة الخصوصية
                </li>
            </ul>
        </div>

        <div 
            className="toggle"
            onClick={()=> setShowToggle(!showToggle)}
        >
            <Image 
                src={toggle}
                alt="toggle-menu" 
                width={32}
                height={32}
            />
        </div>
    </nav>
  )
}

export default Navbar