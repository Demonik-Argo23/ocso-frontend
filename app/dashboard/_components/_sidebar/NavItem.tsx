"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

interface NavItemProps{
    icon: JSX.Element;
    path: string;

}

export const NavItem = ({ icon, path }: NavItemProps) => {
    const pathName = usePathname();
    return (
        <Link href={path} className="w-full h-14 flex justify-center">
        <span className={pathName === path ? 'bg-orange-500 w-10/12 flex justify-center rounded-md transition-colors py-2' : ' transition-colors w-10/12 py-2'}> {icon} </span>
        </Link>
    );
}

export default NavItem;