'use client'

import { useEffect, useRef, useState } from "react";
import { Project, ProjectItem } from "../components/ProjectItem";
import { ApplicationLogo } from "../components/ApplicationLogo";
import Link from "next/link";
import { projects } from "../utils/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export const FeaturedProjects = () => {
    const [openedProject, setOpenedProject] = useState<Project | null>(null);
    const divRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            ScrollSmoother.create({
                smooth: 2,
                effects: true,
            });

            ScrollTrigger.create({
                trigger: '.featured-projects',
                pin: true,
                start: 'center center',
                end: '+=300',
                markers: true,
            });
        }
    );

    const handleClick = (project: Project) => {
        setOpenedProject(project);
    };

    return (
        <div ref={divRef} className="featured-projects min-h-screen px-6 pb-6" id="smooth-wrapper">
            <div className="flex gap-6" id="smooth-content">
                <div className="flex-1 pt-6">
                    <table className="text-[32px] text-[#161314] table">
                        <thead>
                            <tr>
                                <th className="w-[110px]"></th>
                                <th className="text-[#161314] font-normal text-[16px] pb-[40px]">{`{FEATURED PROJECTS}`}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projects.map((project, i) => {
                                    return (
                                        <tr key={`project-${i}`}>
                                            <td className="pb-4">0{i}</td>
                                            <td className="pb-4 uppercase">{`{${project.title}}`}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="w-[460px] pt-6 transition-all duration-300 aria-[expanded=true]:w-[692px]" aria-expanded={openedProject ? 'true' : 'false'}>
                    <div className="flex flex-col gap-[60px] snap-y snap-mandatory">
                        {
                            projects.map((project, i) => {
                                return (
                                    <ProjectItem
                                        key={`project-item-${i}`}
                                        project={project}
                                        isSelected={openedProject ? project.title === openedProject.title : null}
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