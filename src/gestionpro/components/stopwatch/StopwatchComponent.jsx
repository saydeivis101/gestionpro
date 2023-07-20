import React from "react";
import { formatTime } from "../../helpers/formatTime";
import { usePomodoro } from "../../hooks/usePomodoro";

export const StopwatchComponent = () => {
  const { timeRemaining, isRunning, isBreak, handleStart, handleRestart, handleBreak} = usePomodoro({});

  return (
    <>
      <div
        className={`stopwatch ${
          isRunning ? "running" : isBreak ? "break" : "paused"
        }`}
      >
        <h2>00:{formatTime(timeRemaining)}</h2>
      </div>

      <div className="buttons">
        <button onClick={handleStart} className="btn btn-primary">
          {isRunning ? "Pausar" : "Iniciar"}
        </button>

        <button onClick={handleRestart} className="btn btn-danger">
          Restart
        </button>
        <button onClick={handleBreak} className="btn btn-success">
          {isRunning ? "Pausar Break" : "Iniciar Break"}
        </button>
      </div>
    </>
  );
};
