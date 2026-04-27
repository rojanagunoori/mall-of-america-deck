// import { useEffect, useState } from "react";

// export default function AnimatedCounter({ value }: { value: string }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       i += 1;
//       setCount(i);
//       if (i >= 100) clearInterval(interval);
//     }, 10);
//   }, []);

//   return <div className="text-4xl font-bold">{value}</div>;
// }
"use client";

import { useEffect, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
  trigger: boolean; // 👈 NEW
};

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
  trigger,
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    setCount(0); // reset when re-trigger

    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [trigger, value, duration]);

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

function formatNumber(num: number) {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(0) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
  return num.toFixed(0);
}
