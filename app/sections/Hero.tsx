export const Hero = () => {
    return (
        <div className="h-screen relative">
            <video
                src="/assets/videos/hero.mov"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
            />
            <div className="absolute z-10 top-[50%] translate-y-[-50%] left-[140px]">
                <p className="text-[16px] text-[#C5C4C2] leading-none">{`{KVS}`}</p>
            </div>
            <div className="absolute z-10 bottom-[16px] left-[16px] grid grid-cols-2 w-[calc(100%-32px)]">
                <div>
                    <div className="max-w-[457px]">
                        <p className="text-[40px] text-[#C5C4C2] leading-none uppercase text-justify">
                            {`{Every solution is crafted with purpose, ensuring exceptional quality and result}`}
                        </p>
                    </div>
                </div>
                <div className="flex items-end justify-center">
                    <p className="text-[16px] text-[#C5C4C2] leading-none">{`{47.4979° N, 19.0402° E}`}</p>
                </div>
            </div>
        </div>
    )
};