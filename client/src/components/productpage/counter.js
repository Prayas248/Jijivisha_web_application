
import "./counter.css"
import { useState } from "react"

export function Counter() {

  const [count, setCount] = useState(0);

  return (
    <span className="counterContainer">

      <span className="counterSymbol" onClick={() => {
        setCount(count > 0 ? count - 1 : 0);
      }}>-</span>
      <span className="counterComponent">{count}</span>
      <span className="counterSymbol" onClick={() => {
        setCount(count + 1);
      }}>+</span>
    </span >
  )
}

