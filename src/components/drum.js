import { useState } from "react";
import { DrumKey, Keys } from "./drum-key"



export default function Drum() {

    return (
        <div className="drum-keyboard">
            {
                Keys.map((key, index) => <DrumKey index={index} ></DrumKey>)
            }
        </div>
    )
}