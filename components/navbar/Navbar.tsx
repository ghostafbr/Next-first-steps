import {ActiveLink} from '@/components';
import {HomeIcon} from '@primer/octicons-react';
import Link from 'next/link';

const navItems = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
    {href: '/pricing', label: 'Pricing'},
];

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={'/'} className="flex items-center">
                <HomeIcon className="mr-2"/>
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>
            {navItems.map((item) => (
                /*<Link key={item.href} href={item.href} className="mr-2" > {item.label} </Link>*/
                <ActiveLink key={item.label} {...item}/>
            ))}

        </nav>
    );
};
