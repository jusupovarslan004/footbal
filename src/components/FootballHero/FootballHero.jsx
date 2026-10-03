import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./FootballHero.css";

function FootballHero() {
    const sectionRef = useRef(null);
    const ballRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const infoRef = useRef(null);
    const lineRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            tl.fromTo(
                ".stadium-light",
                {
                    opacity: 0,
                    scale: 0.4,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    stagger: 0.12,
                }
            )

                .fromTo(
                    ".football-top",
                    {
                        opacity: 0,
                        y: -20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                    },
                    "-=0.8"
                )

                .fromTo(
                    subtitleRef.current,
                    {
                        opacity: 0,
                        y: 25,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                    },
                    "-=0.4"
                )

                .fromTo(
                    ballRef.current,
                    {
                        opacity: 0,
                        scale: 0.3,
                        y: -80,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 1.1,
                        ease: "back.out(1.5)",
                    },
                    "-=0.4"
                )

                .fromTo(
                    titleRef.current,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.85,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.1,
                    },
                    "-=0.6"
                )

                .fromTo(
                    lineRef.current,
                    {
                        scaleX: 0,
                    },
                    {
                        scaleX: 1,
                        duration: 0.8,
                    },
                    "-=0.6"
                )

                .fromTo(
                    infoRef.current,
                    {
                        opacity: 0,
                        y: 25,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                    },
                    "-=0.4"
                );

            // Мяч находится на одном месте.
            // Только плавно поднимается и опускается.
            gsap.to(ballRef.current, {
                y: -14,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Лёгкое дыхание света
            gsap.to(".stadium-glow", {
                opacity: 0.7,
                scale: 1.08,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="football-hero"
            ref={sectionRef}
        >
            {/* =================================
          BACKGROUND
      ================================= */}

            <div className="stadium-glow" />

            <div className="stadium-lights">
                <div className="stadium-light light-1" />
                <div className="stadium-light light-2" />
                <div className="stadium-light light-3" />
                <div className="stadium-light light-4" />
            </div>

            <div className="stadium-smoke smoke-1" />
            <div className="stadium-smoke smoke-2" />

            {/* =================================
          PARTICLES
      ================================= */}

            <div className="football-particles">
                {Array.from({ length: 30 }).map((_, index) => (
                    <span key={index} />
                ))}
            </div>

            {/* =================================
          TOP
      ================================= */}

            <header className="football-top">
                <div className="brand">
                    KUTTUKTAY
                    <span>.KG</span>
                </div>

                <div className="top-center">
                    <span />
                    <small>ПРИГЛАШЕНИЕ</small>
                    <span />
                </div>

                <div className="top-number">
                    №01
                </div>
            </header>

            {/* =================================
          MAIN
      ================================= */}

            <div className="football-content">

                <p
                    className="football-subtitle"
                    ref={subtitleRef}
                >
                    ТЫ ПРИГЛАШЁН НА
                </p>

                {/* BALL */}

                <div
                    className="football-ball-wrapper"
                    ref={ballRef}
                >
                    <div className="ball-shadow" />

                    <div className="football-ball">
                        ⚽
                    </div>
                </div>

                {/* TITLE */}

                <h1 ref={titleRef}>
                    FOOTBALL
                    <span>PARTY</span>
                </h1>

                <div
                    className="football-line"
                    ref={lineRef}
                />

                <p className="football-description">

                </p>

                {/* INFO */}

                <div
                    className="football-info"
                    ref={infoRef}
                >
                    <div className="football-info-item">

                    </div>

                    <div className="football-divider" />

                    <div className="football-info-item">

                    </div>
                </div>

            </div>

            {/* =================================
          FIELD
      ================================= */}

            <div className="football-field">

                <div className="field-center-line" />

                <div className="field-circle" />

                <div className="field-side field-side-left" />

                <div className="field-side field-side-right" />

            </div>

            {/* =================================
          BOTTOM
      ================================= */}

            <div className="football-bottom">

                <div>
                    <span>ГОТОВ?</span>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-line" />
                    <span>ЛИСТАЙ</span>
                </div>

                <div>
                    <span>ПОГНАЛИ!</span>
                </div>

            </div>
        </section>
    );
}

export default FootballHero;