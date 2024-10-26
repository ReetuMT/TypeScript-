import { useRef, useState, useEffect } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null); 

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []); 

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null; 
        }
    };

    return (
        <div>
            <h1>Timer: {timer} seconds</h1>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};
