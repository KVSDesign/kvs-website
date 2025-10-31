'use client'

import { useEffect, useRef, useState } from "react";
import { Project, ProjectItem } from "../components/ProjectItem";
import { projects } from "../utils/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from 'gsap';
import { useSearchParams } from "next/navigation";
import { ProjectDetail } from "../components/ProjectDetail";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const FeaturedProjects = () => {
    const searchParams = useSearchParams();
    const [openedProject, setOpenedProject] = useState<Project | null>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: divRef.current!,
                start: 'top top',
                end: `bottom+=${divRef.current!.offsetHeight - (navRef.current!.offsetHeight * 2)} top`,
                pin: navRef.current!,
                pinSpacing: false,
                markers: false,
            });
        },
        {
            scope: divRef
        }
    );

    useGSAP(
        () => {
            ScrollTrigger.refresh();
        },
        {
            dependencies: [openedProject],
        }
    );

    useEffect(() => {
        const cs = searchParams.get("cs");
        if (!cs) return;

        const el = document.getElementById(cs);
        if (el) {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: el, offsetY: 24 }, // optional offset for sticky nav
                ease: "power2.out",
            });
        }
    }, [searchParams]);

    const handleClick = (project: Project) => {
        setOpenedProject(project);
    };

    return (
        <div ref={divRef} className="min-h-screen px-6 pb-6 mb-[200px]">
            <div className="relative">
                <div className="absolute top-0 left-0 w-[calc(100%-692px-24px)] aria-[expanded=true]:w-[calc(100%-460px-24px)]" aria-expanded={openedProject ? 'false' : 'true'}>
                    <div ref={navRef} className="max-h-full h-screen py-6">
                        {
                            openedProject ? (
                                <ProjectDetail project={openedProject} onClose={() => setOpenedProject(null)} />
                            ) : (
                                <div className="text-[32px]">
                                    <div className="ps-[118px] text-[#161314] font-normal text-[16px] pb-[40px]">{`{FEATURED PROJECTS}`}</div>
                                    {
                                        projects.map((project, i) => {
                                            return (
                                                <div
                                                    key={`project-${i}`}
                                                    className="max-w-[315px] flex gap-2 items-center text-[#16131499]"
                                                    data-project-nav-item={project.slug}
                                                    style={{
                                                        background: 'linear-gradient(to right, #16131499 100%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent'
                                                    }}
                                                >
                                                    <div className="pb-4 w-[110px]">0{i}</div>
                                                    <div className="pb-4 uppercase">{`{${project.title}}`}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="w-[460px] ms-[calc(100%-460px)] pt-6 transition-all duration-300 aria-[expanded=true]:ms-[calc(100%-692px)] aria-[expanded=true]:w-[692px] relative" aria-expanded={openedProject ? 'true' : 'false'}>
                    <div className="flex flex-col gap-[60px]">
                        {
                            projects.map((project, i) => {
                                return (
                                    <ProjectItem
                                        key={`project-item-${i}`}
                                        project={project}
                                        isSelected={openedProject ? project.slug === openedProject.slug : null}
                                        onClick={handleClick}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};