import { Header } from "../components/Header";

export const Hero = () => {
    return (
        <div className="h-screen">
            <Header />
            <video
                src="/assets/videos/hero.mov"
                className="w-full h-full"
                autoPlay
                loop
                muted
            />
        </div>
    )
};