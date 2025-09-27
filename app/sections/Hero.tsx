export const Hero = () => {
    return (
        <div className="h-screen">
            <video
                src="/assets/videos/hero.mov"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
            />
        </div>
    )
};