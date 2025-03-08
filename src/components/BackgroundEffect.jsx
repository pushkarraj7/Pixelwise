import { useEffect } from "react";

const BackgroundEffect = () => {
    useEffect(() => {
        const bubbleContainer = document.getElementById("bubbles");
        if (!bubbleContainer) return;

        for (let i = 0; i < 10; i++) { // Reduced to 3 bubbles
            let bubble = document.createElement("div");
            bubble.className = "bubble absolute bottom-[-50px] bg-white/30 rounded-full";
            bubble.style.left = `${Math.random() * 100}vw`;
            bubble.style.width = bubble.style.height = `${Math.random() * 30 + 10}px`;
            bubble.style.animation = `rise ${Math.random() * 8 + 5}s infinite ease-in-out`; // Slower rise
            bubbleContainer.appendChild(bubble);
        }
        
        
    }, []);

    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS("particles-js", {
                particles: {
                    number: { value: 80 },
                    size: { value: 3 },
                    move: { speed: 2 },
                    line_linked: { enable: true },
                },
            });
        }
    }, []);

    return (
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
            <div id="particles-js" className="absolute w-full h-full z-0"></div>
            <div id="bubbles" className="absolute w-full h-full z-3"></div>
            <style>
                {`
                @keyframes rise {
                    0% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh);
                        opacity: 0;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default BackgroundEffect;
