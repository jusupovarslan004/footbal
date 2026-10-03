import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FinalFootball.css";

gsap.registerPlugin(ScrollTrigger);

function FinalFootball() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const lineRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                ".final-label",
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.7 }
            )
                .fromTo(
                    titleRef.current,
                    {
                        opacity: 0,
                        y: 70,
                        scale: 0.85,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.2,
                        ease: "power4.out",
                    },
                    "-=0.3"
                )
                .fromTo(
                    lineRef.current,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.6"
                )
                .fromTo(
                    ".final-text",
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.3"
                )
                .fromTo(
                    ".final-mark",
                    { opacity: 0, scale: 0 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                    },
                    "-=0.4"
                );

            gsap.to(".final-glow", {
                scale: 1.15,
                opacity: 0.65,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".final-particle", {
                y: -35,
                opacity: 0.2,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                stagger: 0.25,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="final-football" ref={sectionRef}>
            <div className="final-glow" />

            <div className="final-particles">
                {Array.from({ length: 18 }).map((_, index) => (
                    <span className="final-particle" key={index} />
                ))}
            </div>

            <div className="final-field">
                <div className="final-field-line" />
                <div className="final-field-circle" />
            </div>

            <div className="final-top">
                <span>KUTTUKTAY</span>
                <span>•</span>
                <span>.KG</span>
            </div>

            <div className="final-content">
                <p className="final-label">И ЭТО ЕЩЁ НЕ ВСЁ...</p>

                <h2 ref={titleRef}>
                    ЖДУ ТЕБЯ
                    <span>НА ПОЛЕ</span>
                </h2>

                <div className="final-line" ref={lineRef} />

                <p className="final-text">

                    Погнали играть! ⚽
                </p>

                <div className="final-mark">
                    <span>⚽</span>
                </div>
            </div>

            <div className="final-bottom">
                <span>FOOTBALL</span>

                <div className="final-bottom-center">
                    <span>PARTY</span>
                    <i />
                </div>

                <span>2026</span>
            </div>
        </section>
    );
}

export default FinalFootball;