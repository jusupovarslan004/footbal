import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FootballInvite.css";

gsap.registerPlugin(ScrollTrigger);

function FootballInvite() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const fieldRef = useRef(null);
    const ballRef = useRef(null);
    const infoRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "top 20%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                ".invite-label",
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                }
            )
                .fromTo(
                    titleRef.current,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power4.out",
                    },
                    "-=0.3"
                )
                .fromTo(
                    ".invite-line",
                    {
                        scaleX: 0,
                    },
                    {
                        scaleX: 1,
                        duration: 0.7,
                    },
                    "-=0.5"
                )
                .fromTo(
                    textRef.current,
                    {
                        opacity: 0,
                        y: 35,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                    },
                    "-=0.3"
                )
                .fromTo(
                    infoRef.current.children,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                    },
                    "-=0.4"
                );

            // Поле слегка приближается при скролле
            gsap.fromTo(
                fieldRef.current,
                {
                    scale: 0.8,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "bottom 30%",
                        scrub: 1,
                    },
                }
            );

            // Мяч плавно двигается
            gsap.to(ballRef.current, {
                y: -12,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="football-invite"
            ref={sectionRef}
        >
            {/* Фон */}

            <div className="invite-glow" />

            <div
                className="invite-field"
                ref={fieldRef}
            >
                <div className="invite-field-center" />
                <div className="invite-field-circle" />

                <div className="invite-field-box invite-box-left" />
                <div className="invite-field-box invite-box-right" />
            </div>

            {/* Верхний номер */}

            <div className="invite-number">
                01
            </div>

            {/* Контент */}

            <div className="invite-content">

                <p className="invite-label">
                    ПРИГЛАШЕНИЕ
                </p>

                <h2 ref={titleRef}>
                    Дорогие
                    <span>мои друзья!</span>
                </h2>

                <div className="invite-line" />

                <div
                    className="invite-message"
                    ref={textRef}
                >
                    <p>
                        Приглашаю вас на мой
                    </p>

                    <strong>
                        FOOTBALL PARTY
                    </strong>

                    <p>
                        Надевайте футбольную форму,
                        <br />
                        берите хорошее настроение
                        <br />
                        и приходите играть,
                        <br />
                        веселиться и проводить
                        <br />
                        время вместе!
                    </p>
                </div>

                {/* Мяч */}

                <div
                    className="invite-ball"
                    ref={ballRef}
                >
                    ⚽
                </div>

                {/* Информация */}

                <div
                    className="invite-info"
                    ref={infoRef}
                >
                    <div className="invite-info-card">
                        <span>ВРЕМЯ</span>
                        <strong>11:00</strong>
                    </div>

                    <div className="invite-info-card">
                        <span>МЕСТО</span>
                        <strong>EL CLASICO</strong>
                    </div>

                    <div className="invite-info-card address-card">
                        <span>АДРЕС</span>
                        <strong>
                            Геологический переулок, 3/1
                        </strong>
                    </div>
                </div>

                <div className="invite-bottom-text">
                    ЖДУ ТЕБЯ НА ПОЛЕ ⚽
                </div>

            </div>
        </section>
    );
}

export default FootballInvite;