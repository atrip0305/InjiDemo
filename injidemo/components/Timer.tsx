"use client";

import { useEffect, useState } from "react";

export function Timer({ expiresAt }: { expiresAt: number }) {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (!expiresAt) return;

    const interval = setInterval(() => {
      const diff = Math.max(0, expiresAt - Date.now());
      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <p className="text-amber-600 font-semibold text-lg">
      Expires in {formatted}
    </p>
  );
}