"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div className=" md:flex hidden flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box className="">
            <div className="flex flex-col gap-y-4 px-5 py-4">
                {
                    routes.map(
                        item => (
                         <SidebarItem key={item.label} label={item.label}/>
                          
                        )
                    )
                }
            </div>
        </Box>
        <Box className="overflow-y-auto h-full">Song Library</Box>
      </div>
    </div>
  );
};

export default Sidebar;
