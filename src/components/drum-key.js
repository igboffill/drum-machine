
import { useDispatch } from "react-redux";
import { DrumAudio } from "./drum-audio";
import { setPressed, setReleased } from "../redux/actions";
import { playAudio } from "../auxiliary/audios";

export function DrumKey({  id='', value='',  audio = '', pressed = false, }) {

    const dispatch = useDispatch();
    return (
        <div className={'drum-pad' + (pressed ? ' pressed' : '')} id={id}  onClick={() => {

            dispatch(setPressed(value, id));
            setTimeout(()=>{
                dispatch(setReleased(value)); 
                playAudio(value);
            }, 100);
        }}><DrumAudio id={value} url={audio}></DrumAudio>{value}</div>
    )
};



