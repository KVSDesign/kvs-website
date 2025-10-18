import { CaseStudy, CaseStudyItem } from "@/app/components/CaseStudyItem";
import { Fragment } from "react";

const caseStudies: CaseStudy[] = [
    {
        slug: 'expian',
        title: 'Expian',
        description1: 'formerly Ticknovate, is an experience-focused ticketing platform built for enterprise organisations. Over two years, our work spanned multiple interconnected platforms, addressing both immediate design challenges and long-term strategic needs, while also supporting the onboarding of new enterprise clients.',
        description2: 'This included building a new design system, redesigning the support team portal, and creating dedicated portals for trade partners and customer-facing B2C experiences. We urgently improved their POS software design, developed a new (yet to be implemented) POS concept, and helped position the platform to successfully land multiple enterprise clients.',
        techStacks: [
            'Figma',
            'FigJam',
            'Miro',
            'Photoshop',
            'Illustrator',
            'Jitter',
        ],
        imageUrls: [
            {
                title: 'Main Webm',
                url: '/assets/images/case-study-expian-1.png'
            },
            {
                title: 'Main Webm',
                url: '/assets/images/case-study-expian-1.png'
            }
        ],
    },
    {
        slug: 'givell',
        title: 'Givell',
        description1: 'is a web application designed for content creators, enabling them to receive donations through task completion. As our studio’s first startup venture, co-founded by Kirilo, Klym and Sebastian, the project set out to enhance the lives of content creators by helping them generate additional revenue and foster stronger engagement with their audiences.',
        description2: 'Our work spanned product, design, and communication, including the creation of a new design system, the definition of the platform’s overall style, and the development of marketing campaigns and creative assets. We also produced professional pitch decks and investor communications, helping establish the foundations of the platform while driving both its product vision and early-stage growth.',
        techStacks: [
            'Figma',
            'Figma slides',
            'FigJam',
            'Photoshop',
            'Illustrator',
            'Jitter',
            'Capcut',
        ],
        imageUrls: [
            {
                title: 'Main Webm',
                url: '/assets/images/case-study-givell-1.png'
            },
            {
                title: 'Main Webm',
                url: '/assets/images/case-study-givell-1.png'
            }
        ],
    }
];

export default function CaseStudiesPage() {
    return (
        <div>
            {
                caseStudies.map((caseStudy, i) => {
                    const nextCaseStudy = caseStudies[i + 1];
                    return (
                        <Fragment key={`case-study-${i}`}>
                            <CaseStudyItem caseStudy={caseStudy} />
                            {
                                nextCaseStudy && (
                                    <div className="h-screen bg-[#161314] flex items-center justify-center">
                                        <div className="w-full ps-[141px]">
                                            <div className="w-full grid grid-cols-2 items-center">
                                                <div className="text-center">
                                                    <p className="text-[32px] text-[#C5C4C2]">{`{KEEP SCROLLING}`}</p>
                                                </div>
                                                <div className="flex justify-center">
                                                    <img src={nextCaseStudy.imageUrls[0].url} className="h-[172px]" />
                                                </div>
                                            </div>
                                            <p className="text-[32px] text-[#C5C4C2] uppercase">{`{NEXT:${nextCaseStudy.title}}`}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
};