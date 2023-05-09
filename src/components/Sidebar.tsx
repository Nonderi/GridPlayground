import styles from "./Sidebar.module.css";
import { CSSProperties } from "react";
import Label from "./Label";
import Option from "./Option";

type OwnProps = {
  setGridStyle: (styles: CSSProperties) => void;
  gridStyle: CSSProperties;
};

/*function createObject() {
  const obj = { a: 1, b: 2, c: 3 };
}
function destructObject(obj: { a: number; b: number; c: number }) {
  const { a, ...bc } = obj;
  const { ...copy } = obj;
  const copy2 = { ...obj };
}
function createList() {
  const first = 1;
  const second = 2;
  const third = 3;
  const list = [first, second, third];
}
function destructList(list: number[]) {
  const [first, second, third] = list;
  const [...copy] = list;
  const copy2 = [...list];
  const [a, b, ...rest] = list;
} */

function Sidebar({ setGridStyle, gridStyle }: OwnProps) {
  return (
    <div className={styles.sidebar}>
      <Label>Justify-content</Label>
      <select
        value={gridStyle.justifyContent}
        onChange={(e) => {
          setGridStyle({ justifyContent: e.target.value });
        }}
      >
        <Option>-</Option>
        <Option>center</Option>
        <Option>start</Option>
        <Option>end</Option>
        <Option>space-between</Option>
        <Option>space-around</Option>
      </select>
      <br />
      <br />
      <Label>Align-items</Label> <br />
      <select
        onChange={(e) => {
          setGridStyle({ alignItems: e.target.value });
        }}
      >
        <Option>-</Option>
        <Option>stretch</Option>
        <Option>start</Option>
        <Option>center</Option>
        <Option>end</Option>
      </select>
      <br />
      <br />
      <Label>Grid-row-gap</Label> <br />
      <span>
        <input className={styles.input} placeholder="0" />
        <select className={styles.input}>
          <Option>px</Option>
          <Option>em</Option>
          <Option>vh</Option>
          <Option>%</Option>
          <Option>space-around</Option>
          <Option>space-evenly</Option>
          <Option>initial</Option>
        </select>
      </span>
      <br />
      <br />
      <Label>Grid-column-gap</Label>
      <span>
        <input className={styles.input} placeholder="0" />
        <select className={styles.input}>
          <Option>px</Option>
          <Option>em</Option>
          <Option>vh</Option>
          <Option>%</Option>
          <Option>space-around</Option>
          <Option>space-evenly</Option>
          <Option>initial</Option>
        </select>
      </span>
      <br />
      <br />
      <Label>Grid-auto-flow</Label>
      <select
        onChange={(e) => {
          setGridStyle({ gridAutoFlow: e.target.value });
        }}
      >
        <Option>-</Option>
        <Option>row</Option>
        <Option>column</Option>
        <Option>row dense</Option>
        <Option>column dense</Option>
        <Option>revert</Option>
        <Option>revert-layer</Option>
        <Option>initial</Option>
        <Option>unset</Option>
      </select>
      <br />
      <br />
      <Label>Grid-auto-columns</Label>
      <select
        onChange={(e) => {
          setGridStyle({ gridAutoColumns: e.target.value });
        }}
      >
        <Option>-</Option>
        <Option>revert</Option>
        <Option>revert-layer</Option>
        <Option>initial</Option>
        <Option>unset</Option>
        <Option>auto</Option>
        <Option>min-content</Option>
        <Option>max-content</Option>
      </select>
      <br />
      <br />
      <Label>Grid-auto-rows</Label>
      <select
        onChange={(e) => {
          setGridStyle({ gridAutoRows: e.target.value });
        }}
      >
        <Option>-</Option>
        <Option>row</Option>
        <Option>column</Option>
        <Option>row dense</Option>
        <Option>column dense</Option>
        <Option>revert</Option>
        <Option>revert-layer</Option>
        <Option>initial</Option>
        <Option>unset</Option>
        <Option>auto</Option>
        <Option>min-content</Option>
        <Option>max-content</Option>
      </select>
      <br />
      <br />
      <Label>Grid-template-columns</Label>
      <select
        onChange={(e) => {
          setGridStyle({ gridTemplateColumns: e.target.value });
        }}
      >
        <Option>-</Option>
        <Option>1fr</Option>
        <Option>1fr 1fr 1fr</Option>
        <Option>repeat(5, 1fr)</Option>
        <Option>repeat(5, 100px)</Option>
        <Option>repeat(5, 500px)</Option>
      </select>
      <br />
      <br />
      <Label>Grid-template-rows</Label>
      <select
        onChange={(e) => {
          setGridStyle({ gridTemplateRows: e.target.value });
        }}
      >
        <Option>-</Option>
        <Option>1fr</Option>
        <Option>200px</Option>
        <Option>500px</Option>
        <Option>auto</Option>
        <Option>25%</Option>
      </select>
    </div>
  );
}

export default Sidebar;
