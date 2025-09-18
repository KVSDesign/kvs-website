'use client'

import { useEffect, useState } from "react";
import { ApplicationLogo } from "./ApplicationLogo";
import { SocialLinks } from "./SocialLinks";
import { SocialNav } from "./SocialNav";

export const Header = () => {

    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 56) {
            setScrolled(true);
        } else {
            setScrolled(false);
        };
    };

    return (
        <header className="fixed w-full p-6 grid grid-cols-4 z-100">
            <div className={`${scrolled ? 'col-span-2 relative' : ''}`}>
                <SocialNav scrolled={scrolled} />
            </div>
            <div className={`max-w-[213px] text-primary uppercase ${scrolled ? 'hidden' : ''}`}>
                {
                    "{Premium design and development partner, delivering excellence}"
                }
            </div>
            <div className={`w-full flex justify-center ${scrolled ? 'hidden' : ''}`}>
                <div className="max-w-[95px] text-primary break-all">
                    {
                        "{BUDAPEST/HUNGARY}"
                    }
                </div>
            </div>
            <div className={`${scrolled ? 'hidden' : ''}`}>
                <SocialLinks />
            </div>
        </header>
    );
};