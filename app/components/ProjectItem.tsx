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
        <div className="min-h-screen flex flex-col gap-6">
            {
                isSelected === null ? <>
                    <p>{`{${project.category}}`}</p>
                    <p className="indent-8">{`{${project.tech}}`}</p>
                </> : ''
            }
            <div className="snap-center">
                <img src={project.thumbnailUrl} className="rounded-[12px] h-full" />
            </div>
            {
                isSelected === null ? (
                    <div className="ps-[110px]">
                        <p className="text-[#16131499]">{`{DESCRIPTION}`}</p>
                        <p className="indent-10 text-justify">{`${project.shortDescription}`}</p>
                    </div>
                ) : ''
            }
        </div>
    )
};
