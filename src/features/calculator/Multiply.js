import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../counter/Counter.module.css";
import { multiply, selectResult,divide } from "./multiplierSlice";

export function Mulitply() {
  const count = useSelector(selectResult);
  const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState("2");
  //   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(multiply());
          }}
        >
          *
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(divide())}
        >
          /
        </button>
      </div>
      {/* <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch()}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={() => dispatch()}>
          Add Async
        </button>
        <button className={styles.button} onClick={() => dispatch()}>
          Add If Odd
        </button>
      </div> */}
    </div>
  );
}
