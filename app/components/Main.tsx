'use client'

import { HTMLProps } from "react";
import { Hero } from "../sections/Hero";
import { FeaturedProjects } from "../sections/FeaturedProjects";
import { PeopleBehind } from "../sections/PeopleBehind";
import { TechStacks } from "../sections/TechStacks";
import { Testimonials } from "../sections/Testimonials";
import { WhatIfThis } from "../sections/WhatIfThis";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

interface MainProps extends HTMLProps<HTMLDivElement> {

};

export const Main = ({ }: MainProps) => {
    useGSAP(
        () => {
            ScrollSmoother.create({
                smooth: 2,
                effects: true,
            });
        }
    );

    return (
        <main id="smooth-wrapper">
            <div id="smooth-content">
                <Hero />
                <FeaturedProjects />
                <WhatIfThis />
                <Testimonials />
                <PeopleBehind />
                <TechStacks />
            </div>
        </main>
    )
};