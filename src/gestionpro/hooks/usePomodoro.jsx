import { useEffect, useState } from "react";

export const usePomodoro = () => {
    const [timeRemaining, setTimeRemaining] = useState(1500); 
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
  
    useEffect(() => {
      let intervalId;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    useEffect(() => {
      setIsBreak(false);
    }, [isRunning]);
  
    const handleStart = () => {
      if (isRunning) {
        setIsRunning(false);
      } else {
        setIsRunning(true);
        setIsBreak(false); // Reiniciamos isBreak cuando inicia el cronómetro
      }
    };
  
    const handleRestart = () => {
      setIsRunning(false);
      setTimeRemaining(1500);
    };
  
    const handleBreak = () => {
      if (isRunning) {
        setIsRunning(false);
        setIsBreak(true);
      } else {
        setIsRunning(true);
        setIsBreak(false); // Reiniciamos isBreak cuando inicia el cronómetro
        setTimeRemaining(300); // 5 minutes in seconds
      }
    };

  return {
    timeRemaining,
    isRunning,
    isBreak,
    handleStart,
    handleRestart,
    handleBreak,
  }
}
