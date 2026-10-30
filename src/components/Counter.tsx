"use client";

import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <button
      onClick={() => setCounter(counter + 3)}
      className="py-3 px-6 cursor-pointer rounded-4xl bg-orange-500 hover:bg-orange-400 active:bg-orange-500"
    >
      Click me {counter}
    </button>
  );
}
