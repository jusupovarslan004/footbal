import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GameDay.css";

gsap.registerPlugin(ScrollTrigger);

function GameDay() {
    const sectionRef = useRef(null);
    const timeRef = useRef(null);
    const venueRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "top 15%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                ".game-label",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 }
            )
                .fromTo(
                    ".game-title",
                    {
                        opacity: 0,
                        scale: 0.75,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out",
                    },
                    "-=0.25"
                )
                .fromTo(
                    ".game-line",
                    { scaleX: 0 },
                    { scaleX: 1, duration: 0.7 },
                    "-=0.5"
                )
                .fromTo(
                    timeRef.current,
                    {
                        opacity: 0,
                        scale: 0.7,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "back.out(1.4)",
                    },
                    "-=0.3"
                )
                .fromTo(
                    venueRef.current,
                    {
                        opacity: 0,
                        y: 35,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                    },
                    "-=0.4"
                )
                .fromTo(
                    ".game-address",
                    {
                        opacity: 0,
                        y: 25,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                    },
                    "-=0.4"
                )
                .fromTo(
                    ".game-button",
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                    },
                    "-=0.3"
                );

            // Пульсация центрального света
            gsap.to(".game-glow", {
                scale: 1.15,
                opacity: 0.7,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Мяч только вверх / вниз
            gsap.to(".game-ball", {
                y: -14,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Прорисовка маршрута
            gsap.fromTo(
                ".route-line",
                {
                    strokeDashoffset: 500,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1.8,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 65%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const openMap = () => {
        window.open(
            "https://2gis.kg/bishkek/search/%D0%93%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA%2C%203%2F1",
            "_blank"
        );
    };

    return (
        <section
            className="game-day"
            ref={sectionRef}
        >
            {/* Фон */}

            <div className="game-glow" />

            <div className="stadium-light game-light-1" />
            <div className="stadium-light game-light-2" />

            {/* Стадион */}

            <div className="stadium-background">
                <div className="stadium-stand stand-left" />
                <div className="stadium-stand stand-right" />

                <div className="stadium-spotlight spotlight-left" />
                <div className="stadium-spotlight spotlight-right" />
            </div>

            {/* Поле */}

            <div className="game-field">
                <div className="game-field-line" />
                <div className="game-field-circle" />
            </div>

            {/* Верх */}

            <div className="game-top">
                <span>03</span>
                <span>GAME DAY</span>
            </div>

            {/* Контент */}

            <div className="game-content">

                <p className="game-label">
                    СОБИРАЕМСЯ НА ПОЛЕ
                </p>

                <h2 className="game-title">
                    GAME
                    <span>DAY</span>
                </h2>

                <div className="game-line" />

                {/* Время */}

                <div
                    className="game-time"
                    ref={timeRef}
                >
                    <span>НАЧАЛО</span>

                    <strong>
                        11:00
                    </strong>
                </div>

                {/* Мяч */}

                <div className="game-ball">
                    ⚽
                </div>

                {/* Место */}

                <div
                    className="game-venue"
                    ref={venueRef}
                >
                    <span>МЕСТО</span>

                    <h3>
                        EL CLASICO
                    </h3>
                </div>

                {/* Адрес */}

                <p
                    className="game-address"
                >
                    Геологический переулок, 3/1
                </p>

                {/* Кнопка */}

                <button
                    className="game-button"
                    onClick={openMap}
                >
          <span>
            ПОКАЗАТЬ НА КАРТЕ
          </span>

                    <b>↗</b>
                </button>

            </div>

            {/* Маршрут */}

            <svg
                className="game-route"
                viewBox="0 0 500 800"
                preserveAspectRatio="none"
            >
                <path
                    className="route-line"
                    d="
            M 70 720
            C 150 650,
              110 570,
              230 510
            C 350 450,
              400 360,
              300 270
            C 230 205,
              320 120,
              430 70
          "
                />
            </svg>

            {/* Точка */}

            <div className="game-pin">
                <div className="pin-pulse" />
                <div className="pin-dot" />
            </div>

            {/* Низ */}

            <div className="game-bottom">
                <span>READY</span>

                <div>
                    <span>FIELD</span>
                    <span>01</span>
                </div>

                <span>LET'S PLAY</span>
            </div>
        </section>
    );
}

export default GameDay;