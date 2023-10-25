export const PRESSED = 'PRESSED',
    RELEASED = 'RELEASED';

export const setPressed = (key, name)=>{
    return {
        type:PRESSED,
        key,
        name
    }
};

export const setReleased = (key)=>{
    return {
        type:RELEASED,
        key
    }
};