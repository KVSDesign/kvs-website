'use client'

import { Hero } from "../sections/Hero";
import { FeaturedProjects } from "../sections/FeaturedProjects";
import { PeopleBehind } from "../sections/PeopleBehind";
import { TechStacks } from "../sections/TechStacks";
import { Testimonials } from "../sections/Testimonials";
import { WhatIfThis } from "../sections/WhatIfThis";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from 'gsap';
import { Suspense, useEffect } from "react";

gsap.registerPlugin(useGSAP);
export let smoother: ScrollSmoother | null = null;

export const Main = () => {

    useEffect(() => {
        smoother = ScrollSmoother.create({
            smooth: 2,
        });
    }, []);

    return (
        <main id="smooth-wrapper">
            <div id="smooth-content">
                <Hero />
                <Suspense>
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