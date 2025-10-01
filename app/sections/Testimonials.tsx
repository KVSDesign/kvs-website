export const Testimonials = () => {
    return (
        <div className="min-h-screen p-6">
            <div className="grid grid-cols-2 mb-[90px]">
                <div className="max-w-[459px]">
                    <p className="text-[#161314] text-[32px] text-justify uppercase">
                        “When I first brought up the idea, I had no clue we were touching something this complex, and definitely didn’t expect it to be solved this elegantly.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[16px] text-[#161314] text-center mb-[60px]">{`{Straight from the client}`}</p>
                    <div>
                        <img src="/assets/images/quick2.png" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="max-w-[459px]">
                    <p className="text-[32px] uppercase text-justify"><span className="text-[#16131499]">What</span> <span className="italic">Sebastian</span> <span className="text-[#16131499]">and</span> <span className="font-semibold">Kirilo</span> built goes way beyond just "getting it done": it's a mindset, a level of care, and execution that truly stands out. It wasn’t the idea that made this great, it’s what they turned it into.”</p>
                    <p className="text-end mb-4 text-[16px]">{`{Zoltán Kristó}`}</p>
                    <p className="text-[16px]">{`{Managing Director, RIport Applications}`}</p>
                </div>
            </div>
        </div>
    )
};