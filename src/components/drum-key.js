import { useState } from "react";

export const Keys = [
    {
        value: 'Q',
        audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
    },
    {
        value: 'W',
        audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    },
    {
        value: 'E',
        audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
    },
    {
        value: 'A',
        audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
    },
    {
        value: 'S',
        audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
    },
    {
        value: 'D',
        audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')
    },
    {
        value: 'Z',
        audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
    },
    {
        value: 'X',
        audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
    },
    {
        value: 'C',
        audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
    },

];

export function DrumKey({ index = 0, volume = 0.5, handlePress = null }) {
    const key = Keys[index]
    const [pressed, setPressed] = useState(false);

    if (volume > 0 && volume <= 1) {
        key.audio.volume = volume;
    }

    document.addEventListener("keydown", (e) => {
        if (!e.repeat) {
            
            if (key.value.toUpperCase() == e.key.toUpperCase() && key.audio) {
                setPressed( true);
                key.audio.play(); 
            }
        }
    }, false);

    document.addEventListener("keyup", (e) => {
        if (!e.repeat) {
            
            if (key.value.toUpperCase() == e.key.toUpperCase()) {
                setPressed( false);
            }
        }
    }, false);
    console.log(index)

    return (
        <div className={'drum-key' + (pressed ? ' pressed' : '')} key={index} onClick={() => {
            if (key.audio) {
                key.audio.play();
            }
            if (handlePress) {
                handlePress(key.value)
            }
        }}>{key.value}</div>
    )
}

