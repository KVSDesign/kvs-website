import { ApplicationLogo } from "@/app/components/ApplicationLogo";
import Link from "next/link";

export type CaseStudy = {
    slug: string,
    title: string,
    description1: string,
    description2: string,
    techStacks: string[],
    imageUrls: {
        title: string,
        url: string,
    }[],
};

interface CaseStudyItemProps {
    caseStudy: CaseStudy,
};

export const CaseStudyItem = ({ caseStudy }: CaseStudyItemProps) => {
    return (
        <div className="min-h-screen px-6 flex gap-6 relative mb-[200px]">
            <div className="flex-1">
                <div className="flex flex-col justify-between sticky top-0 h-screen py-6">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <ApplicationLogo color="dark" />
                        </Link>
                        <Link href="/" className="font-semibold">
                            CLOSE
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-[458px]">
                            <div className="max-w-[342px]">
                                <p className="text-justify indent-10"><span className="text-[32px] uppercase">{`{${caseStudy.title}}`}</span> {caseStudy.description1}</p>
                            </div>
                        </div>
                        <div className="w-full max-w-[458px] flex justify-end">
                            <div className="max-w-[342px]">
                                <p className="text-justify">{caseStudy.description2}</p>
                            </div>
                        </div>
                    </div>
                    <ul className="text-[16px] font-normal">
                        {
                            caseStudy.techStacks.map((techStack, i) => {
                                return <li key={`case-study-${caseStudy.slug}-tech-stack-${i}`} className="uppercase">{`{${techStack}}`}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="w-[692px] flex flex-col gap-2 py-6">
                {
                    caseStudy.imageUrls.map((imageUrl, i) => {
                        return (
                            <div key={`case-study-${caseStudy.slug}-image-url-${i}`} className="bg-[#161314] rounded-[12px] h-[800px] flex items-center justify-center">
                                <div>
                                    <p className="text-[#C5C4C2] mb-4 uppercase text-[16px]">{`{${imageUrl.title}}`}</p>
                                    <img src={imageUrl.url} className="max-h-[350px]" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};