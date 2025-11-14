'use client'

import { useEffect, useRef, useState } from "react";
import { ProjectItem } from "../components/ProjectItem";
import { projects } from "../utils/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from 'gsap';
import { ProjectDetail } from "../components/ProjectDetail";
import { Project } from "../types/Project";
import { smoother } from "../components/Main";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const FeaturedProjects = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const detailRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const [openedProject, setOpenedProject] = useState<Project | null>(null);

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: divRef.current!,
                start: 'top top',
                end: `bottom-=${navRef.current!.offsetHeight}`,
                pin: navRef.current,
                pinSpacing: false,
                markers: false,
            });
        },
        {
            scope: divRef,
        }
    );

    useGSAP(
        () => {
            ScrollTrigger.refresh();

            gsap.to(detailRef.current, {
                width: openedProject
                    ? 'calc(100% - 460px - 24px)'
                    : 'calc(100% - 692px - 24px)',
                duration: 0.5,
                ease: 'power2.inOut',
            });

            gsap.to(projectsRef.current, {
                width: openedProject ? 692 : 460,
                marginLeft: openedProject ? 'calc(100% - 692px)' : 'calc(100% - 460px)',
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => {
                    if (!openedProject) return;

                    gsap.to(window, {
                        duration: .2,
                        scrollTo: { y: `#${openedProject.slug}`, offsetY: 16, autoKill: true },
                        ease: "power2.out",
                        overwrite: true,
                    });
                }
            });

        },
        {
            scope: divRef,
            dependencies: [openedProject],
        }
    );

    const handleNavClick = (slug: string) => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: `#${slug}`, autoKill: true },
            ease: "power2.out",
        });
    };

    const handleProjectClose = () => {
        setOpenedProject(null);
        if (!smoother) return;
    };

    const handleProjectOpen = (project: Project | null) => {
        setOpenedProject(project);
        if (!smoother || !project || !detailRef.current) return;
    };

    return (
        <div ref={divRef} className="relative min-h-screen px-6 pb-6 mb-[200px]" id="featured-projects">
            <div className="relative">
                <div ref={detailRef} className="absolute top-0 left-0" style={{ width: 'calc(100% - 460px - 24px)' }}>
                    <div ref={navRef} className="py-6 bg-[#C5C4C2]">
                        {
                            !openedProject ? (
                                <div className="text-[32px]">
                                    <div className="ps-[118px] text-[#161314] font-normal text-[16px] pb-[40px]">{`{FEATURED PROJECTS}`}</div>
                                    {
                                        projects.map((project, i) => {
                                            return (
                                                <div
                                                    key={`project-${i}`}
                                                    className="max-w-[315px] flex gap-2 items-center text-[#16131499] cursor-pointer"
                                                    data-project-nav-item={project.slug}
                                                    style={{
                                                        background: 'linear-gradient(to right, #16131499 100%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent'
                                                    }}
                                                    onClick={() => handleNavClick(project.slug)}
                                                >
                                                    <div className="pb-4 w-[110px]">0{i}</div>
                                                    <div className="pb-4 uppercase">{`{${project.title}}`}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) : (
                                <ProjectDetail
                                    project={openedProject}
                                    onClose={handleProjectClose}
                                />
                            )
                        }
                    </div>
                </div>
                <div ref={projectsRef} className="pt-6" style={{ width: '460px' }}>
                    <div className="flex flex-col gap-[60px]">
                        {
                            projects.map((project, i) => {
                                return (
                                    <ProjectItem
                                        key={`project-item-${i}`}
                                        project={project}
                                        selected={openedProject ? openedProject.slug === project.slug : null}
                                        onSelect={handleProjectOpen}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
};