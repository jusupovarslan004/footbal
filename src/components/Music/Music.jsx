import { useEffect, useRef, useState } from "react";
import "./Music.css";

function Music() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        audio.loop = true;
        audio.volume = 0.35;

        const startMusic = () => {
            audio
                .play()
                .then(() => {
                    setPlaying(true);
                })
                .catch(() => {});
        };

        // 📱 Первое касание экрана
        window.addEventListener("touchstart", startMusic, {
            once: true,
            passive: true,
        });

        // 🖥 Первый клик мышкой
        window.addEventListener("pointerdown", startMusic, {
            once: true,
        });

        return () => {
            window.removeEventListener("touchstart", startMusic);
            window.removeEventListener("pointerdown", startMusic);
        };
    }, []);

    const toggleMusic = () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (audio.paused) {
            audio.play().then(() => {
                setPlaying(true);
            });
        } else {
            audio.pause();
            setPlaying(false);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/music.mp3"
                preload="auto"
            />

            <button
                className={`music-button ${
                    playing ? "is-playing" : ""
                }`}
                onClick={toggleMusic}
                aria-label="Музыка"
            >
                <span className="music-icon">
                    {playing ? "♫" : "♪"}
                </span>

                <span className="music-waves">
                    <i />
                    <i />
                    <i />
                </span>
            </button>
        </>
    );
}

export default Music;