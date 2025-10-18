'use client'

import Lottie, { Options } from 'react-lottie';
import People from '../assets/lotties/people.json'

export const PeopleBehind = () => {
    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData: People,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="min-h-screen p-6 mb-[200px]">
            <div className='flex gap-[124px] relative'>
                <div className='rounded-[12px] sticky top-0'>
                    <Lottie
                        options={defaultOptions}
                        isClickToPauseDisabled={true}
                        height={902}
                        width={459}
                        style={{ cursor: 'auto', borderRadius: '12px' }}
                    />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="items-center justify-center pt-[230px] pe-[115px]">
                        <div className='grid grid-cols-2'>
                            <div></div>
                            <p className="mb-[300px]">{`{The People Behind Precision}`}</p>
                            <p className='text-justify'>{`{KVS}`} is a small, focused team built around two core collaborators, Kirilo and Sebastian, supported by a close network of trusted partners. When needed, we bring in top-tier friends who are experts in Webflow, Framer, full-stack development, graphic design, motion and more.</p>
                            <div></div>
                            <div></div>
                            <p className='text-justify'>We’re not a big studio, and we don’t pretend to be. We stay lean, hands-on, and committed to delivering excellence, whether it’s in product design, web, or scalable digital solutions. We're creative, technical, and obsessed with solving real problems.</p>
                            <p className='text-justify'>Our relationships with clients are built on clarity, trust, and open communication. We deliver work that not only looks great, but is cleanly built, user-centric, and aligned with business KPIs.</p>
                        </div>
                    </div>
                    <p className="text-end">We craft like jewellers carve diamonds, every detail has intent. </p>
                </div>

            </div>
        </div>
    )
};