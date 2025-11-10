import Lottie, { Options } from "react-lottie";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MouseEvent, useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import Link from "next/link";
import { Project } from "../types/Project";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ProjectItemProps {
    project: Project,
    selected: boolean | null,
    onSelect: (project: Project | null) => void,
}

export const ProjectItem = ({ project, selected, onSelect }: ProjectItemProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const lottieContainerRef = useRef<HTMLDivElement>(null);

    const lottieOptions: Options = {
        loop: true,
        autoplay: true,
        animationData: project.lotties[0].data,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: divRef.current!,
                start: 'top',
                end: `bottom`,
                markers: false,
                onUpdate: (self) => {
                    const navItem = document.querySelector(`div[data-project-nav-item="${project.slug}"]`) as HTMLDivElement | null;
                    if (!navItem) return;
                    const percentage = Number(self.progress.toFixed(2)) * 100;
                    navItem.style.background = `linear-gradient(to right, #161314 ${percentage}%, #16131499 ${percentage}%)`;
                    navItem.style.backgroundClip = "text";
                    navItem.style.webkitBackgroundClip = "text";
                    navItem.style.webkitTextFillColor = "transparent";
                }
            });
        },
        {
            scope: divRef,
        }
    );

    useGSAP(
        () => {
            const container = imageContainerRef.current!;
            const lottieDiv = lottieContainerRef.current!;

            const tl = gsap.timeline({
                paused: true,
                defaults: { ease: "power1.out", duration: 0.4 },
            });

            tl.to(lottieDiv, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "none",
            });

            const play = () => tl.play();
            const reverse = () => tl.reverse();

            if (!selected) {
                container.addEventListener("mouseenter", play);
                container.addEventListener("mouseleave", reverse);
            } else {
                container.removeEventListener("mouseenter", play);
                container.removeEventListener("mouseleave", reverse);
                tl.kill();
            };

            return () => {
                container.removeEventListener("mouseenter", play);
                container.removeEventListener("mouseleave", reverse);
                tl.kill();
            };
        },
        {
            scope: divRef,
            dependencies: [selected],
        }
    );

    useGSAP(
        () => {
            if (!selected) return;

            const trigger = ScrollTrigger.create({
                trigger: divRef.current!,
                start: "top top",
                end: "bottom",
                pinSpacing: false,
                markers: false,
                onLeave: () => {
                    onSelect(null);
                    ScrollTrigger.refresh();
                },
            });

            return () => trigger.kill();
        },
        { dependencies: [selected], scope: divRef }
    );

    useEffect(() => {
        const hash = window.location.hash;
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: hash, autoKill: true },
            ease: "power2.out",
        });
    }, []);

    const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        onSelect(project);
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: divRef.current!, offsetY: 32 },
            ease: "power2.out",
        });
    };

    return (
        <div ref={divRef} className="flex flex-col gap-6" data-project-item={project.slug} id={project.slug}>
            {
                selected !== true && (
                    <>
                        <p>{`{${project.category}}`}</p>
                        <p className="indent-8">{`{${project.tech}}`}</p>
                    </>
                )
            }
            <Link href={`#${project.slug}`} onClick={handleClick}>
                <div ref={imageContainerRef} className="w-full h-[641px] rounded-[12px] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center gap-2 relative" style={{ backgroundImage: `url(${project.thumbnailUrl})` }}>
                    <div ref={overlayRef} className={cn('bg-[#161314] w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[12px] scale-0 transition-[scale] duration-400', selected === true ? '!scale-100' : '')}></div>
                    {
                        selected !== true && (
                            <img
                                ref={logoRef}
                                src={project.logoUrl}
                                className="mix-blend-difference transition-transform absolute z-20"
                                alt="kvs"
                            />
                        )
                    }
                    <div
                        ref={lottieContainerRef}
                        className={cn('absolute h-[250px] overflow-hidden scale-0 opacity-0 flex items-center flex-col justify-center z-10', selected === true ? '!scale-100 !opacity-100' : '')}
                    >
                        {
                            selected === true && (
                                <p className="text-[16px] uppercase text-[#C5C4C2] mb-4 w-full">{`{${project.lotties[0].title}}`}</p>
                            )
                        }
                        <Lottie
                            options={lottieOptions}
                            isClickToPauseDisabled={true}
                            style={{ borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </Link>
            {
                selected === true && (
                    project.lotties.map((lottie, i) => {
                        return (
                            <div key={`project-${project.slug}-lottie-${i}`} className="w-full bg-[#161314] h-[641px] rounded-[12px] flex flex-col items-center justify-center gap-2">
                                <div className="h-[250px] overflow-hidden flex items-center flex-col justify-center">
                                    <p className="text-[16px] uppercase text-[#C5C4C2] mb-4 w-full">{`{${lottie.title}}`}</p>
                                    <Lottie
                                        options={{
                                            loop: true,
                                            autoplay: true,
                                            animationData: lottie.data,
                                            rendererSettings: {
                                                preserveAspectRatio: "xMidYMid slice"
                                            }
                                        }}
                                        isClickToPauseDisabled={true}
                                        style={{ borderRadius: '12px' }}
                                    />
                                </div>
                            </div>
                        )
                    })
                )
            }
            {
                selected !== true && (
                    <div className="ps-[110px]">
                        <p className="text-[#16131499]">{`{DESCRIPTION}`}</p>
                        <p className="indent-10 text-justify">{`${project.shortDescription}`}</p>
                    </div>
                )
            }
        </div>
    )
};
