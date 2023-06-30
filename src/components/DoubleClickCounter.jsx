import { useState, useRef } from "react";

export function DoubleClickCounter() {
  const THRESHOLD = 300;
  const [counter, setCounter] = useState(0);
  const lastClickTime = useRef(null);

  const handleDoubleClick = () => {
    const isDoubleClicked = Date.now() - lastClickTime.current < THRESHOLD;

    if (isDoubleClicked) {
      setCounter((value) => value + 1);
    } else {
      lastClickTime.current = Date.now();
    }
  };
  return (
    <div style={{ margin: "24px auto", padding: "24px", fontSize: "22px" }}>
      <p>{counter}</p>
      <button onClick={handleDoubleClick}>Increment</button>
    </div>
  );
}
