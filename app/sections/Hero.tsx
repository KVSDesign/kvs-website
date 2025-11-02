'use client'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export const Hero = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    // const canvasRef = useRef<HTMLCanvasElement>(null);
    // const [imageUrls, setImageUrls] = useState<string[]>([]);

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: divRef.current!,
                start: 'top top',       // when the section hits the top of viewport
                end: 'bottom',          // how far it stays pinned (in pixels)
                pin: true,              // <— the magic part!
                pinSpacing: false,       // add space below to maintain scroll length
                markers: false,         // set true to debug
            });
        },
        {
            scope: containerRef.current!
        }
    );

    // useGSAP(() => {
    //     let timeout: NodeJS.Timeout | null = null;

    //     ScrollSmoother.create({
    //         smooth: 1,
    //         effects: true,
    //         smoothTouch: 0.1,
    //     });

    //     gsap.to(divRef, {
    //         scrollTrigger: {
    //             trigger: '.hero',
    //             start: "top center",
    //             end: "bottom",
    //             markers: true,
    //             onUpdate: (self) => {
    //                 if (Number(self.progress.toFixed(3)) < 1) {
    //                     if (timeout) clearTimeout(timeout);
    //                     timeout = setTimeout(() => {
    //                         // takeSnapshot();
    //                     }, 300);
    //                 };
    //             },
    //             onLeave: () => {
    //                 console.log('left');
    //             },
    //         },
    //     });
    // });

    // useEffect(() => {
    //     let importMap: HTMLScriptElement | null = null;
    //     let flutedScript: HTMLScriptElement | null = null;

    //     const loadImportMap = () =>
    //         new Promise<void>((resolve) => {
    //             // check if importmap already exists (avoid duplicates)
    //             if (document.querySelector('script[type="importmap"]')) {
    //                 resolve();
    //                 return;
    //             }

    //             importMap = document.createElement("script");
    //             importMap.type = "importmap";
    //             importMap.defer = true;
    //             importMap.innerHTML = JSON.stringify({
    //                 imports: {
    //                     three:
    //                         "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.min.js",
    //                 },
    //             });
    //             document.head.appendChild(importMap);

    //             // slight delay to let browser register the import map
    //             setTimeout(resolve, 50);
    //         });

    //     const loadFlutedGlass = () =>
    //         new Promise<void>((resolve, reject) => {
    //             flutedScript = document.createElement("script");
    //             flutedScript.type = "module";
    //             flutedScript.defer = true;
    //             flutedScript.src =
    //                 "https://cdn.jsdelivr.net/gh/the-lazy-god/tlg-fluted-glass@v2.0.0/tlg-fluted-glass.min.js";
    //             flutedScript.onload = () => resolve();
    //             flutedScript.onerror = (err) => reject(err);
    //             document.body.appendChild(flutedScript);
    //         });

    //     (async () => {
    //         try {
    //             await loadImportMap();
    //             await loadFlutedGlass();
    //             console.log("✅ Three.js importmap and Fluted Glass loaded");
    //         } catch (err) {
    //             console.error("❌ Failed to load scripts:", err);
    //         }
    //     })();

    //     return () => {
    //         if (importMap) document.head.removeChild(importMap);
    //         if (flutedScript) document.body.removeChild(flutedScript);
    //     };
    // }, []);

    // useEffect(() => {
    //     let lastScrollY = window.scrollY;

    //     const handleScroll = () => {
    //         const currentScrollY = window.scrollY;
    //         const screenHeight = window.innerHeight;

    //         if (currentScrollY > lastScrollY) {
    //             if (currentScrollY >= screenHeight) {
    //                 setImageUrls([]);
    //             } else {
    //                 takeSnapshot();
    //             }
    //         }

    //         lastScrollY = currentScrollY;
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // const takeSnapshot = () => {
    //     const video = videoRef.current;
    //     const canvas = canvasRef.current;
    //     if (!video || !canvas) return;

    //     // Match canvas size to video frame
    //     canvas.width = video.videoWidth;
    //     canvas.height = video.videoHeight;

    //     const ctx = canvas.getContext("2d");
    //     if (!ctx) return;

    //     // Draw current video frame
    //     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    //     // Convert to Base64
    //     const imageData = canvas.toDataURL("image/png");

    //     // Store in array
    //     setImageUrls((prev) => [...prev, imageData]);
    // };

    return (
        <div ref={containerRef} className="h-screen relative overflow-hidden">
            <div ref={divRef} className="relative w-full h-full">
                <video
                    ref={videoRef}
                    src="/assets/videos/hero.mov"
                    className="hero-video w-full h-full object-cover"
                    tlg-fluted-glass-image=""
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
        </div>
    )
};