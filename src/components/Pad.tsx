import React, {useCallback, useEffect, useState} from 'react';

type SoundTypes = {
    keyCode: string,
    name: string,
    sound: any,
    color:string
}

const Pad: React.FC<SoundTypes> = ({keyCode, sound, color}: SoundTypes) => {
    const [playing, setPlaying] = useState(false);
    const onPlay = useCallback(() => {
        setPlaying(true);
        new Audio(sound).play().then(() => {
        })

        setTimeout(() => {
            setPlaying(false);
        }, 300);
    },[sound])

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === keyCode.toLowerCase()) {
                onPlay();
            }
        });
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        // @ts-ignore
        <div style={{background: playing && color,boxShadow: playing && color}} className={`pad ${playing ? "playing" : ""}`} onClick={onPlay}>
            <h2>{keyCode}</h2>
        </div>
    );
}

export default Pad;