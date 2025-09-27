import { ProjectItem } from "../components/ProjectItem";

export const FeaturedProjects = () => {
    return (
        <div className="min-h-screen px-6 pb-6">
            <div className="flex">
                <div className="flex-1">
                    <div className="pt-6 sticky top-0">
                        <table className="text-[32px] text-[#161314]">
                            <thead>
                                <tr>
                                    <th className="w-[110px]"></th>
                                    <th className="text-[#161314] font-normal text-[16px] pb-[40px]">{`{FEATURED PROJECTS}`}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pb-4">01</td>
                                    <td className="pb-4">{`{QUICK}`}</td>
                                </tr>
                                <tr className="text-[#16131499]">
                                    <td className="pb-4">02</td>
                                    <td className="pb-4">{`{EXPIAN}`}</td>
                                </tr>
                                <tr className="text-[#16131499]">
                                    <td className="pb-4">03</td>
                                    <td className="pb-4">{`{GIVELL}`}</td>
                                </tr>
                                <tr className="text-[#16131499]">
                                    <td className="pb-4">04</td>
                                    <td className="pb-4">{`{CHAPTR}`}</td>
                                </tr>
                                <tr className="text-[#16131499]">
                                    <td className="pb-4">05</td>
                                    <td className="pb-4">{`{ALTEAM}`}</td>
                                </tr>
                                <tr className="text-[#16131499]">
                                    <td className="pb-4">05</td>
                                    <td className="pb-4">{`{SOLOSIXTY}`}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-[460px] flex flex-col gap-[60px] pt-6">
                    <ProjectItem 
                        category="FINTECH"
                        tech="CHROME EXTENSION"
                        imageUrl="/assets/images/quick.png"
                        description="QUICK is part of the Riport fintech suite, focused on simplifying financial tracking for micro to medium-sized businesses as an accessible alternative to costly ERP systems."
                    />
                    <ProjectItem 
                        category="B2B2C ENTERPRISE TICKETING"
                        tech="WEB APP, POS"
                        imageUrl="/assets/images/expian.png"
                        description="Expian (formerly Ticknovate) is an experience-driven ticketing platform built to meet the complex demands of enterprise organisations."
                    />
                    <ProjectItem 
                        category="INFLUENCER MARKETING"
                        tech="WEB APP, WEBSITE"
                        imageUrl="/assets/images/givell.png"
                        description="Givell is a platform for content creators to receive donations through tasks and requests,  helping them boost engagement and unlock new revenue streams."
                    />
                    <ProjectItem 
                        category="AI STORY GENERATION"
                        tech="MOBILE APP"
                        imageUrl="/assets/images/chaptr.png"
                        description="Chaptr is a Web3 and AI startup in the publishing space. One of its flagship products, Stori, is a mobile app that generates personalised children’s stories with the help of AI."
                    />
                    <ProjectItem 
                        category="RECRUITMENT"
                        tech="ADMIN PANEL"
                        imageUrl="/assets/images/alteam.png"
                        description="Alteam is a recruitment platform connecting clients with world-class freelancers and contractors across industries."
                    />
                    <ProjectItem 
                        category="FITNESS, PROP-TECH"
                        tech="WEBSITE, MOBILE APP"
                        imageUrl="/assets/images/solo60.png"
                        description="Solo60 is a network of bookable wellness spaces, available solo, with friends, or with clients, for sessions starting at just 60 minutes."
                    />
                </div>
            </div>
        </div>
    )
};