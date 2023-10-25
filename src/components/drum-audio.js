import { memo } from "react";

export const  DrumAudio = memo(function DrumAudio({id='',url=''}){
    return <audio className="clip" id={id} src={url}></audio>
});