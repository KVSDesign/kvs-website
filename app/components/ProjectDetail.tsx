import Link from "next/link";
import { ApplicationLogo } from "../components/ApplicationLogo";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from "@gsap/react";
import { Project } from "../types/Project";

gsap.registerPlugin(SplitText);

interface ProjectDetailProps {
    project: Project,
    onClose: () => void,
};

export const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {

    useGSAP(() => {
        const childSplit = new SplitText(".animate-text", {
            type: "lines",
            linesClass: "split-child"
        });

        new SplitText(".animate-text", {
            type: "lines",
            linesClass: "split-parent"
        });

        gsap.from(childSplit.lines, {
            yPercent: 100,
            ease: 'power4',
            duration: 0.3,
            stagger: 0.1
        })
    });


    return (
        <div className="flex flex-col justify-between gap-6 h-full">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <ApplicationLogo color="dark" />
                </Link>
                <button type="button" className="font-semibold cursor-pointer" onClick={onClose}>
                    CLOSE
                </button>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-full max-w-[458px]">
                    <div className="max-w-[342px]">
                        <p className="text-justify animate-text"><span className="w-[30px] inline-block">&nbsp;</span><span className="text-[32px] uppercase">{`{${project.title}}`}</span> {project.description1}</p>
                    </div>
                </div>
                <div className="w-full max-w-[458px] flex justify-end">
                    <div className="max-w-[342px]">
                        <p className="text-justify animate-text">{project.description2}</p>
                    </div>
                </div>
            </div>
            <ul className="text-[16px] font-normal">
                {
                    project.techStacks.map((techStack, i) => {
                        return <li key={`project-${project.slug}-tech-stack-${i}`} className="uppercase animate-text">{`{${techStack}}`}</li>
                    })
                }
            </ul>
        </div>
    )
};