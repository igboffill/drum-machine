
import { DrumKey } from "./drum-key"
import { Keys, KeysValues } from "../keys";
import { useDispatch } from "react-redux";
import { setPressed, setReleased } from "../redux/actions";
import { playAudio } from "../auxiliary/audios";



export default function Drum({ pressedKeys = [] }) {

  const dispatch = useDispatch();
  if (!document.areDrumKeyEventsListening) {
    document.addEventListener("keydown", (e) => {
      const key = Keys.find(k=>k.value ===  e.key.toUpperCase());
      if (!e.repeat  && key) {        
        dispatch(setPressed(key.value,key.name));
        playAudio(e.key)
      }
    }, false);

    document.addEventListener("keyup", (e) => {
      if (!e.repeat && KeysValues.includes(e.key.toUpperCase())) {
        dispatch(setReleased(e.key.toUpperCase()));
      }
    }, false);

    document.areDrumKeyEventsListening = true;
  }

  return (
    <div className="drum-keyboard">
      {
        Keys.map((key, index) => {

          return <DrumKey key={index} index={index} value={key.value} audio={key.audio} id={key.name} pressed={pressedKeys.includes(key.value)} ></DrumKey>
          
        })
      }
    </div>
  )
}