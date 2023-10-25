import { KeysValues } from "./keys";

export function playAudio(keyValue) {
    const _keyValue = keyValue.toUpperCase()
    if (KeysValues.includes(_keyValue)) {
        try {
            if (document.lastAudioPlayed) {
                document.lastAudioPlayed.pause();
                document.lastAudioPlayed.currentTime = 0;
            }
            const audio = document.getElementById(_keyValue);
            audio.play();
            document.lastAudioPlayed = audio;
        } catch (error) {
            console.error(error);
        }

    }
}