import { useEffect, useRef, useState } from "react";

function CountdownTimer({ initialTime, onTimeFinish }) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalReference = useRef();