import react, { CSSProperties } from "react";
import styles from "./Label.module.css";

type OwnProps = { children: string };
function Label({ children }: OwnProps) {
  return <label className={styles.label}>{children}</label>;
}

export default Label;
