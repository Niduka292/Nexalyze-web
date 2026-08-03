"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  duration?: number;
}

/**
 * Counts up from 0 to `target` when it enters the viewport.
 */
export default function AnimatedCounter({
  target,
  suffix,
  duration = 1500,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(Math.round(current));
      if (current >= target) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count}
      <span className="text-3xl">{suffix}</span>
    </span>
  );
}
