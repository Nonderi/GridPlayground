import styles from "./Sidebar.module.css";
import { CSSProperties } from "react";
import Label from "./Label";
import Option from "./Option";

type OwnProps = {
  setGridStyle: (styles: CSSProperties) => void;
  gridStyle: CSSProperties;
};

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
        <Option>center</Option>
        <Option>start</Option>
        <Option>end</Option>
      </select>
      <br />
      <br />
      <Label>Grid-auto-flow</Label>
      <select
        value={gridStyle.gridAutoFlow}
        onChange={(e) => {
          setGridStyle({ ...gridStyle, gridAutoFlow: e.target.value });
        }}
      >
        <Option>-</Option>
        <Option>row</Option>
        <Option>column</Option>
      </select>
      <br />
      <br />
      <Label>Grid-template-columns</Label>
      <select
        value={gridStyle.gridTemplateColumns}
        onChange={(e) => {
          setGridStyle({ ...gridStyle, gridTemplateColumns: e.target.value });
        }}
      >
        <Option>1fr</Option>
        <Option>1fr 1fr</Option>
        <Option>1fr 1fr 1fr</Option>
        <Option>repeat(5, 1fr)</Option>
        <Option>repeat(5, 100px)</Option>
        <Option>repeat(5, 500px)</Option>
      </select>
      <br />
      <br />
      <Label>Grid-template-rows</Label>
      <select
        value={gridStyle.gridTemplateRows}
        onChange={(e) => {
          setGridStyle({ ...gridStyle, gridTemplateRows: e.target.value });
        }}
      >
        <Option>-</Option>
        <Option>1fr</Option>
        <Option>150px</Option>
        <Option>repeat(3, 150px)</Option>
        <Option>500px</Option>
        <Option>auto</Option>
        <Option>repeat(3, 10%)</Option>
      </select>
    </div>
  );
}

export default Sidebar;
