import React from "react";
import Logo from '../assets/logo.svg';
import { sidebarMenu } from "../Ultils/menu";
import { NavLink } from "react-router-dom";


const notActiveStyle = 'py-[8px] px-[25px] text-[#32323D] font-bold flex gap-4'
const activeStyle = 'py-[8px] px-[25px] text-[#0F7070] font-bold flex gap-4'

const SidebarLeft = () => {
    return (
        <div className="flex flex-col bg-[#DDE4E4]">
            <div className="w-full h-[70] py-[15px] px-[25px] flex justify-start items-center">
                <img src={Logo} alt="logo" className="w-[120px] h-10"/>
            </div>
            <div className="flex flex-col">
                {sidebarMenu.map(item => (
                    <NavLink 
                        to={item.path}
                        key={item.path}
                        end={item.end}
                        className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                    >
                        {item.icons}
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SidebarLeft