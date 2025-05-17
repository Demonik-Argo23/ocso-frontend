"use client";
import { Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import React from "react";


interface NavItemProps{
    icon: JSX.Element;
    path: string;
}

export const NavItem = ({ icon, path }: NavItemProps) => {
    const pathName = usePathname();
    const isActive = pathName === path;
    return (
        <Link href={path} className="w-full flex justify-center">
            <span className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors
                ${isActive ? 'bg-orange-500 text-white shadow' : 'text-gray-400 hover:bg-gray-100'}`}>
                {icon}
            </span>
        </Link>
    );
}

export default NavItem;