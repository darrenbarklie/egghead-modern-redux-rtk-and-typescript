import React from "react";
import { Link } from "react-router-dom";
import { getNumItems } from "./cartSlice";
import { useAppSelector } from "../../app/hooks";
import styles from "./CartLink.module.css";

export function CartLink() {
  const numItems = useAppSelector(getNumItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>
        🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}
      </span>
    </Link>
  );
}
