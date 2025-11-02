import { useEffect, useState } from "react";
import { ApplicationLogo } from "./ApplicationLogo"
import { SocialLinks } from "./SocialLinks";

export interface SocialNavProps {
    scrolled: boolean
};

export const SocialNav = ({ scrolled }: SocialNavProps) => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (scrolled === false) {
            setOpen(false);
        };
    }, [scrolled]);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className={`flex rounded-[16px] transition-all p-4 ${scrolled ? 'bg-[#161314B2] backdrop-blur-[12px] left-[50%] absolute cursor-pointer' : 'pointer-events-none'} ${open ? 'w-[226px] h-[200px] justify-between' : 'w-[98px] h-[88px]'}`} onClick={handleClick}>
            <ApplicationLogo />
            {
                open && <SocialLinks />
            }
        </div>
    )
};