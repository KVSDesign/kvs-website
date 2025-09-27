interface ProjectItemProps {
    category: string,
    tech: string,
    imageUrl: string,
    description: string,
}

export const ProjectItem = ({ category, tech, imageUrl, description }: ProjectItemProps) => {
    return (
        <div className="flex flex-col gap-4">
            <p>{`{${category}}`}</p>
            <p className="ps-[110px]">{`{${tech}}`}</p>
            <div>
                <img src={imageUrl} />
            </div>
            <div>
                <p className="ps-[110px] text-[#16131499]">{`{DESCRIPTION}`}</p>
                <p className="ps-[110px] indent-10">{`${description}`}</p>
            </div>
        </div>
    )
};