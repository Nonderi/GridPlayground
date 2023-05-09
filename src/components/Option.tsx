import react, { CSSProperties } from "react";
import styles from "./Option.module.css";
import Label from "./Label";

type OwnProps = { children: string };
function Option({ children }: OwnProps) {
  return <option className={styles.option}>{children}</option>;
}

export default Option;
