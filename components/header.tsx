"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {

    const pathname = usePathname();

    const link = (href: string, label: string) => {
        const active = pathname === href;

        return (
        <a href={href} className="relative group">
            {label}
            <span
            className={`
                absolute left-0 bottom-0 h-[6px] bg-[#f0075c] rounded-full translate-y-2
                transition-all duration-300 ease-out
                ${active ? 'w-full' : 'w-0 group-hover:w-full'}
            `}
            />
        </a>
        );
    };

    return (
        <header className="h-20 w-full px-4 bg-[#111112]">
            <div className="flex items-center h-full space-x-12 text-l text-white font-bold uppercase">
                <Menu className="w-6 h-6 cursor-pointer" strokeWidth={4} />
                {link('/', 'Home')}
                {link('/development', 'Development')}
                {link('/3d_work', '3D Work')}
                {link('/other', 'Other')}
                {link('/about_me', 'About Me')}
            </div>
        </header>
    );
};