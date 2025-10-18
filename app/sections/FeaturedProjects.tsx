'use client'

import { useEffect, useRef, useState } from "react";
import { Project, ProjectItem } from "../components/ProjectItem";
import { ApplicationLogo } from "../components/ApplicationLogo";
import Link from "next/link";
import { projects } from "../utils/constants";

export const FeaturedProjects = () => {
    const [openedProject, setOpenedProject] = useState<Project | null>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const handleClick = (project: Project) => {
        setOpenedProject(project);
    };

    return (
        <div ref={divRef} className="px-6 pb-6">
            <div className="flex gap-6">
                <div className="flex-1">
                    <div className="pt-6 sticky flex flex-col gap-6 top-0">
                        {
                            !openedProject ? (
                                <table className="text-[32px] text-[#161314]">
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
                            ) : (
                                <>
                                    <div className="flex justify-between items-center">
                                        <Link href="/">
                                            <ApplicationLogo color="dark" />
                                        </Link>
                                        <button type="button" className="font-semibold cursor-pointer" onClick={() => setOpenedProject(null)}>
                                            CLOSE
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-full max-w-[458px]">
                                            <div className="max-w-[342px]">
                                                <p className="text-justify indent-10"><span className="text-[32px] uppercase">{`{${openedProject.title}}`}</span> {openedProject.description1}</p>
                                            </div>
                                        </div>
                                        <div className="w-full max-w-[458px] flex justify-end">
                                            <div className="max-w-[342px]">
                                                <p className="text-justify">{openedProject.description2}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="text-[16px] font-normal">
                                        {
                                            openedProject.techStacks.map((techStack, i) => {
                                                return <li key={`project-${openedProject.title.toLowerCase().replaceAll(' ', '-')}-tech-stack-${i}`} className="uppercase">{`{${techStack}}`}</li>
                                            })
                                        }
                                    </ul>
                                </>
                            )
                        }

                    </div>
                </div>
                {/* <div className="w-[460px] min-h-screen flex flex-col gap-[60px] pt-6 transition-all duration-300 aria-[expanded=true]:w-[692px]" aria-expanded={openedProject ? 'true' : 'false'}>
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
                </div> */}
            </div>
        </div>
    )
};