'use client'

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
import { Suspense } from "react";

gsap.registerPlugin(useGSAP);

export const Main = () => {
    useGSAP(
        () => {
            ScrollSmoother.create({
                smooth: 2,
            });
        }
    );

    return (
        <main id="smooth-wrapper">
            <div id="smooth-content">
                <Hero />
                <Suspense fallback={<></>}>
                    <FeaturedProjects />
                </Suspense>
                <WhatIfThis />
                <Testimonials />
                <PeopleBehind />
                <TechStacks />
            </div>
        </main>
    )
};