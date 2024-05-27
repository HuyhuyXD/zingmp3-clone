import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../Components";


const Public = () => {
    return (
        <div className="w-full">
            <div>
                <SidebarLeft />
            </div>

            <div>
            <Outlet />
            </div>

            <div>
                <SidebarRight />
            </div>
            
        </div>
    )
}

export default Public