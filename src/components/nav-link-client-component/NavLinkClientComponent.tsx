'use client'
import React, {FC} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import "./nav-link.css"

interface IProps{
    path:string,
    children: React.ReactNode
}


const NavLinkClientComponent:FC<IProps> = ({path, children}) => {
    let pathname = usePathname();
    console.log(pathname);
    return (
        <div>
            <Link href={path} className={pathname === path ? "active":""}>{children} </Link>
        </div>
    );
};

export default NavLinkClientComponent;