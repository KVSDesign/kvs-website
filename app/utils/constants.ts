import { Project } from "../components/ProjectItem";

import QUiCKMain from '@/app/assets/lotties/quick/quick-main.json'
import QUiCK1 from '@/app/assets/lotties/quick/quick-1.json'
import QUiCK2 from '@/app/assets/lotties/quick/quick-2.json'
import QUiCK3 from '@/app/assets/lotties/quick/quick-3.json'
import QUiCK4 from '@/app/assets/lotties/quick/quick-4.json'

import ExpianMain from '@/app/assets/lotties/expian/expian-main.json'
import Expian1 from '@/app/assets/lotties/expian/expian-1.json'
import Expian2 from '@/app/assets/lotties/expian/expian-2.json'
import Expian3 from '@/app/assets/lotties/expian/expian-3.json'
import Expian4 from '@/app/assets/lotties/expian/expian-4.json'
import Expian5 from '@/app/assets/lotties/expian/expian-5.json'
import Expian6 from '@/app/assets/lotties/expian/expian-6.json'
import Expian7 from '@/app/assets/lotties/expian/expian-7.json'

import GivellMain from '@/app/assets/lotties/givell/givell-main.json'
import Givell1 from '@/app/assets/lotties/givell/givell-1.json'
import Givell2 from '@/app/assets/lotties/givell/givell-2.json'
import Givell3 from '@/app/assets/lotties/givell/givell-3.json'
import Givell4 from '@/app/assets/lotties/givell/givell-4.json'
import Givell5 from '@/app/assets/lotties/givell/givell-5.json'
import Givell6 from '@/app/assets/lotties/givell/givell-6.json'
import Givell7 from '@/app/assets/lotties/givell/givell-7.json'

import ChaptrMain from '@/app/assets/lotties/chaptr/chaptr-main.json'
import Chaptr1 from '@/app/assets/lotties/chaptr/chaptr-1.json'
import Chaptr2 from '@/app/assets/lotties/chaptr/chaptr-2.json'
import Chaptr3 from '@/app/assets/lotties/chaptr/chaptr-3.json'
import Chaptr4 from '@/app/assets/lotties/chaptr/chaptr-4.json'

import AlteamMain from '@/app/assets/lotties/alteam/alteam-main.json'
import Alteam1 from '@/app/assets/lotties/alteam/alteam-1.json'
import Alteam2 from '@/app/assets/lotties/alteam/alteam-2.json'
import Alteam3 from '@/app/assets/lotties/alteam/alteam-3.json'
import Alteam4 from '@/app/assets/lotties/alteam/alteam-4.json'
import Alteam5 from '@/app/assets/lotties/alteam/alteam-5.json'

import Solo60Main from '@/app/assets/lotties/solo60/solo60-main.json'
import Solo601 from '@/app/assets/lotties/solo60/solo60-1.json'
import Solo602 from '@/app/assets/lotties/solo60/solo60-2.json'
import Solo603 from '@/app/assets/lotties/solo60/solo60-3.json'
import Solo604 from '@/app/assets/lotties/solo60/solo60-4.json'
import Solo605 from '@/app/assets/lotties/solo60/solo60-5.json'
import Solo606 from '@/app/assets/lotties/solo60/solo60-6.json'

export const projects: Project[] = [
    {
        title: 'Quick',
        category: 'FINTECH',
        tech: 'CHROME EXTENSION',
        thumbnailUrl: '/assets/images/quick.png',
        logoUrl: '/assets/images/quick-logo.png',
        shortDescription: 'QUICK is part of the Riport fintech suite, focused on simplifying financial tracking for micro to medium-sized businesses as an accessible alternative to costly ERP systems.',
        description1: 'is part of the Riport fintech suite, focused on simplifying financial tracking for micro to medium-sized businesses as an accessible alternative to costly ERP systems. Our studio partnered with QUiCK to design and build a Chrome extension that streamlines document and invoice uploads, enabling smoother financial workflows.',
        description2: 'Our work included solution research, flow mapping, and creating a new design style with wireframes for all main screens. We delivered final designs with a refreshed visual system, custom Lottie animations, and pixel-perfect front-end implementation. Development introduced advanced features like document scanning, href tracking, and a programmable document interceptor. Together, these improvements ensured seamless backend integration and a more intuitive, efficient user experience.',
        techStacks: [
            'Figma',
            'FigJam',
            'Jitter',
            'HMTL/CSS',
            'React',
            'Javascript',
            'Typescript',
        ],
        lotties: [
            {
                title: 'MAIN WEBM',
                data: QUiCKMain
            },
            {
                title: 'QUiCK 1',
                data: QUiCK1
            },
            {
                title: 'QUiCK 2',
                data: QUiCK2
            },
            {
                title: 'QUiCK 3',
                data: QUiCK3
            },
            {
                title: 'QUiCK 4',
                data: QUiCK4
            },
        ],
    },
    {
        title: 'Expian',
        category: 'B2B2C ENTERPRISE TICKETING',
        tech: 'WEB APP, POS',
        thumbnailUrl: '/assets/images/expian.png',
        logoUrl: '/assets/images/expian-logo.png',
        shortDescription: 'Expian (formerly Ticknovate) is an experience-driven ticketing platform built to meet the complex demands of enterprise organisations.',
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
        lotties: [
            {
                title: 'MAIN WEBM',
                data: ExpianMain
            },
            {
                title: 'Expian 1',
                data: Expian1
            },
            {
                title: 'Expian 2',
                data: Expian2
            },
            {
                title: 'Expian 3',
                data: Expian3
            },
            {
                title: 'Expian 4',
                data: Expian4
            },
            {
                title: 'Expian 5',
                data: Expian5
            },
            {
                title: 'Expian 6',
                data: Expian6
            },
            {
                title: 'Expian 7',
                data: Expian7
            },
        ],
    },
    {
        title: 'Givell',
        category: 'INFLUENCER MARKETING',
        tech: 'WEB APP, WEBSITE',
        thumbnailUrl: '/assets/images/givell.png',
        logoUrl: '/assets/images/givell-logo.png',
        shortDescription: 'Givell is a platform for content creators to receive donations through tasks and requests,  helping them boost engagement and unlock new revenue streams.',
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
        lotties: [
            {
                title: 'MAIN WEBM',
                data: GivellMain
            },
            {
                title: 'Givell 1',
                data: Givell1
            },
            {
                title: 'Givell 2',
                data: Givell2
            },
            {
                title: 'Givell 3',
                data: Givell3
            },
            {
                title: 'Givell 4',
                data: Givell4
            },
            {
                title: 'Givell 5',
                data: Givell5
            },
            {
                title: 'Givell 6',
                data: Givell6
            },
            {
                title: 'Givell 7',
                data: Givell7
            },
        ],
    },
    {
        title: 'CHAPTR',
        category: 'AI STORY GENERATION',
        tech: 'MOBILE APP',
        thumbnailUrl: '/assets/images/chaptr.png',
        logoUrl: '/assets/images/chaptr-logo.png',
        shortDescription: 'Chaptr is a Web3 and AI startup in the publishing space. One of its flagship products, Stori, is a mobile app that generates personalised children’s stories with the help of AI.',
        description1: 'is an AI startup focused on developing innovative solutions for the publishing sector. We partnered with the team to lead the design of Stori, an AI-powered children’s storytelling app. Once the design was completed and the app built, Stori was showcased on Google’s main stage during a Google Bard presentation, introducing our design to a global audience.',
        description2: 'Our work included developing a comprehensive design system with a component library, style guides, and design rules; collaborating with a renowned Creative Director to define the app’s vision, aesthetics, and micro-interactions; and designing a visually engaging native application for both iOS and Android platforms. This collaboration also gave us early hands-on experience with AI before its mainstream adoption, strengthening our expertise in integrating AI from both a design and technical perspective.',
        techStacks: [
            'Figma',
            'FigJam',
            'Miro',
            'Photoshop',
            'Illustrator',
        ],
        lotties: [
            {
                title: 'MAIN WEBM',
                data: ChaptrMain
            },
            {
                title: 'Chaptr 1',
                data: Chaptr1
            },
            {
                title: 'Chaptr 2',
                data: Chaptr2
            },
            {
                title: 'Chaptr 3',
                data: Chaptr3
            },
            {
                title: 'Chaptr 4',
                data: Chaptr4
            },
        ],
    },
    {
        title: 'ALTEAM',
        category: 'RECRUITMENT',
        tech: 'ADMIN PANEL',
        thumbnailUrl: '/assets/images/alteam.png',
        logoUrl: '/assets/images/alteam-logo.png',
        shortDescription: 'Alteam is a recruitment platform connecting clients with world-class freelancers and contractors across industries.',
        description1: 'connects product experts with startups and venture builders, supporting growth from MVP through scaling. Our studio partnered with Alteam in its early conceptual phase to design an admin panel that would help build a collective of skilled professionals and manage talent, clients, and job listings. Although the company has since pivoted, the admin panel we designed continues to be used in the platform’s refreshed version to fulfill its original purpose.',
        description2: 'Our work included creating a detailed design system with a comprehensive component library, style guides, and design principles; collaborating closely with the founder to shape and execute the product vision; and producing design prototypes for demos and investor presentations that clearly represented the platform’s potential. We delivered the product under tight deadlines with a focus on a desktop-only interface.',
        techStacks: [
            'Figma',
            'FigJam',
            'Photoshop',
            'Illustrator',
        ],
        lotties: [
            {
                title: 'MAIN WEBM',
                data: AlteamMain
            },
            {
                title: 'Alteam 1',
                data: Alteam1
            },
            {
                title: 'Alteam 2',
                data: Alteam2
            },
            {
                title: 'Alteam 3',
                data: Alteam3
            },
            {
                title: 'Alteam 4',
                data: Alteam4
            },
            {
                title: 'Alteam 5',
                data: Alteam5
            },
        ],
    },
    {
        title: 'SOLOSIXTY',
        category: 'FITNESS, PROP-TECH',
        tech: 'WEBSITE, MOBILE APP',
        thumbnailUrl: '/assets/images/solo60.png',
        logoUrl: '/assets/images/solo60-logo.png',
        shortDescription: 'Solo60 is a network of bookable wellness spaces, available solo, with friends, or with clients, for sessions starting at just 60 minutes.',
        description1: 'is a startup transforming unused London spaces into accessible gyms. Using a credits and subscription model, the app lets gym-goers and trainers rent spaces for private or group sessions. Our studio partnered with SoloSixty to redesign their web and app interfaces, focusing on user experience and a smoother booking flow to attract new users and fix issues the old design couldn’t.',
        description2: 'We conducted market and competitor research, created a new site map and wireframes with the founder, and redesigned the website with clear, SEO-optimised pages to drive downloads. We also refreshed the app interface for better usability, clarity, and booking flow based on user feedback. These improvements positioned the platform to grow its user base through a significantly stronger customer experience.',
        techStacks: [
            'Figma',
            'FigJam',
            'Photoshop',
            'Illustrator',
        ],
        lotties: [
            {
                title: 'MAIN WEBM',
                data: Solo60Main
            },
            {
                title: 'Solo60 1',
                data: Solo601
            },
            {
                title: 'Solo60 2',
                data: Solo602
            },
            {
                title: 'Solo60 3',
                data: Solo603
            },
            {
                title: 'Solo60 4',
                data: Solo604
            },
            {
                title: 'Solo60 5',
                data: Solo605
            },
            {
                title: 'Solo60 6',
                data: Solo606
            },
        ],
    },
];