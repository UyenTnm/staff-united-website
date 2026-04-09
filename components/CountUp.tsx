"use client";

import { useEffect, useState } from "react";

export default function CountUp({ end, duration = 1500, start }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, start]);

  return count;
}
