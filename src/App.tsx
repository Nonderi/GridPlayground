import { Children, CSSProperties, useState } from "react";
import "./App.module.css";
import Box from "./components/Box";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";
import { range } from "./utils";
function App() {
  const gridStyleState = useState<CSSProperties>({
    justifyContent: "",
    gridAutoFlow: "",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "",
  });
  const [gridStyle, setGridStyle] = gridStyleState;
  return (
    <div className={styles.app}>
      <Header></Header>
      <Sidebar
        setGridStyle={(value) => {
          setGridStyle(value);
        }}
        gridStyle={gridStyle}
      />
      <div className={styles.container} style={gridStyle}>
        {range(21).map((item) => (
          <Box key={item}></Box>
        ))}
      </div>
    </div>
  );
}

export default App;
