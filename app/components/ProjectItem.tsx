import Lottie, { Options } from "react-lottie";

export type Project = {
    title: string,
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
        data: any,
    }[]
};

interface ProjectItemProps {
    project: Project,
    isSelected: boolean | null,
    onClick: (project: Project) => void
}

export const ProjectItem = ({ project, isSelected, onClick }: ProjectItemProps) => {
    if (isSelected === false) return;

    return (
        <div className="flex flex-col gap-4">
            {
                isSelected === null ? <>
                    <p>{`{${project.category}}`}</p>
                    <p className="indent-8">{`{${project.tech}}`}</p>
                </> : ''
            }

            {
                project.lotties.map((lottie, i) => {
                    return (
                        <div key={`project-${project.title.toLowerCase().replaceAll(' ', '-')}-lottie-${i}`} className={`cursor-pointer relative rounded-[12px] group ${i !== 0 && isSelected === null ? 'hidden' : ''}`} onClick={() => onClick(project)}>
                            <div className={`absolute top-0 left-0 w-full h-full rounded-[12px] bg-[#161314] z-10 scale-0 ${isSelected === true ? 'scale-100' : ''} transition duration-300`}></div>
                            <div className="absolute top-0 left-0 w-full h-full z-20 rounded-[12px]  px-4">
                                <div className="w-full h-full flex items-center justify-center flex-col relative">
                                    {
                                        isSelected === true ? <p className="text-[#C5C4C2] mb-6 uppercase text-[16px] w-full">{`{${lottie.title}}`}</p> : ''
                                    }
                                    <img src={project.logoUrl} className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-top duration-500 group-hover:top-[25%] group-hover:delay-0 delay-200" />
                                    <div
                                        className={`h-[250px] overflow-hidden transition scale-0 duration-500 group-hover:scale-100 group-hover:delay-200 ${isSelected === true ? 'scale-100 h-[400]' : 'cursor-pointer'}`}
                                    >
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
                            </div>
                            <img src={project.thumbnailUrl} className="rounded-[12px] h-[600px]" />
                        </div>
                    )
                })
            }
            {
                isSelected === null ? <div className="ps-[110px]">
                    <p className="text-[#16131499]">{`{DESCRIPTION}`}</p>
                    <p className="indent-10 text-justify">{`${project.shortDescription}`}</p>
                </div> : ''
            }
        </div>
    )
};
