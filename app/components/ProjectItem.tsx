import Lottie, { Options } from "react-lottie";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MouseEvent, useRef } from "react";
import gsap from 'gsap';
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export type Project = {
    title: string,
    slug: string,
    category: string,
    tech: string,
    thumbnailUrl: string,
    logoUrl: string,
    shortDescription: string,
    description1: string,
    description2: string,
    techStacks: string[],
    lotties: {
        title: string,
        data: unknown,
    }[]
};

interface ProjectItemProps {
    project: Project,
    isSelected: boolean | null,
    onClick: (project: Project) => void
}

export const ProjectItem = ({ project, isSelected, onClick }: ProjectItemProps) => {
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
                    if (navItem) {
                        const percentage = Number(self.progress.toFixed(2)) * 100;
                        navItem.style.background = `linear-gradient(to right, #161314 ${percentage}%, #16131499 ${percentage}%)`;
                        navItem.style.backgroundClip = "text";
                        navItem.style.webkitBackgroundClip = "text";
                        navItem.style.webkitTextFillColor = "transparent";
                    };
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
            const overlay = overlayRef.current!;
            const logo = logoRef.current!;
            const lottieDiv = lottieContainerRef.current!;

            // Define these once so they can be removed correctly
            const tl = gsap.timeline({
                paused: true,
                defaults: { ease: "power1.out", duration: 0.6 },
            });

            if (!isSelected) {
                const play = () => tl.play();
                const reverse = () => tl.reverse();

                tl.to(logo, { y: -200 }, 0)
                    .to(
                        lottieDiv,
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.8,
                            delay: 0.6,
                            ease: "back.out(1.7)",
                        },
                        0
                    );

                // Add listeners
                container.addEventListener("mouseenter", play);
                container.addEventListener("mouseleave", reverse);

                // Cleanup hover listeners when dependency changes or unmounts
                return () => {
                    container.removeEventListener("mouseenter", play);
                    container.removeEventListener("mouseleave", reverse);
                    tl.kill();
                };

            };

            gsap.to(logo, {
                display: 'none',
            });

            gsap.to(overlay, {
                scale: 1,
            });


        },
        {
            scope: divRef,
            dependencies: [isSelected],
        }
    );

    const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        if (isSelected !== null) return;
        onClick(project);
    };

    return (
        <div ref={divRef} className="flex flex-col gap-6" data-project-item={project.slug} id={project.slug}>
            {
                isSelected !== true ? (
                    <>
                        <p>{`{${project.category}}`}</p>
                        <p className="indent-8">{`{${project.tech}}`}</p>
                    </>
                ) : ''
            }
            <Link href={`?cs=${project.slug}`} className="block" onClick={handleClick}>
                <div ref={imageContainerRef} className="w-full h-[641px] rounded-[12px] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center gap-2 relative" style={{ backgroundImage: `url(${project.thumbnailUrl})` }}>
                    <div ref={overlayRef} className="bg-[#161314] w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[12px] scale-0"></div>
                    <img
                        ref={logoRef}
                        src={project.logoUrl}
                        className="mix-blend-difference transition-transform absolute z-10"
                        alt="kvs"
                    />
                    <div ref={lottieContainerRef} className="absolute h-[250px] overflow-hidden scale-0 opacity-0 flex items-center justify-center z-10" style={{ scale: isSelected ? '1' : '' }}>
                        <Lottie
                            options={lottieOptions}
                            isClickToPauseDisabled={true}
                            style={{ borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </Link>
            {
                isSelected === true ? (
                    <div className="flex flex-col gap-2">
                        {
                            project.lotties.map((lottie, i) => {
                                return (
                                    <div key={`project-${project.slug}-lottie-${i}`} className="w-full bg-[#161314] h-[641px] rounded-[12px] flex flex-col items-center justify-center gap-2">
                                        <div className="h-[250px] overflow-hidden flex items-center justify-center">
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
                        }
                    </div>
                ) : ''
            }
            {
                isSelected !== true ? (
                    <div className="ps-[110px]">
                        <p className="text-[#16131499]">{`{DESCRIPTION}`}</p>
                        <p className="indent-10 text-justify">{`${project.shortDescription}`}</p>
                    </div>
                ) : ''
            }
        </div>
    )
};
