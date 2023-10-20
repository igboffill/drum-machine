function DrumKey({value='', index=0, audio='', volume=0.5, pressed=false, handlePress = null}){
    const audioElement = audio ? new Audio(audio) : null;
    if(audioElement && volume > 0 && volume <= 1){
        audioElement.volume = volume;
    }
    console.log(pressed)
    
    return (
        <div className={'drum-key' + (pressed ? ' pressed' : '')} key={index} onClick={()=>{
           if(audioElement){
            audioElement.play();
           }
           if(handlePress){
            handlePress(value)
           }
        }}>{value}</div>
    )
}

export default DrumKey;