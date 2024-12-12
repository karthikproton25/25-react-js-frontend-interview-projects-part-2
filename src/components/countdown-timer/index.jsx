import { useEffect, useRef, useState } from "react";

function CountdownTimer({ initialTime, onTimeFinish }) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalReference = useRef();
  
  useEffect(() => {
    if (isRunning) {
    
      intervalReference.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalReference.current);
            setIsRunning(false);

            if (onTimeFinish) {
              onTimeFinish();
            }

            return 0;
          }

          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalReference.current);
    }

    return () => {
      clearInterval(intervalReference.current);
    };
  }, [isRunning, onTimeFinish]);

  function handlePauseAndResume() {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  }

  function handleReset() {
    clearInterval(intervalReference.current);
    setTime(initialTime);
    setIsRunning(false)
  }

  function handleStart() {
    setIsRunning(true);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
