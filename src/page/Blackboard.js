import { useState } from "react";

export default function BlackBoard() {
  const [NaeYong, CNaeYong] = useState("");

  const PushText = (e) => {
    CNaeYong(e.target.value);
  };

  return (
    <div className="App">
      <h1>디지털 칠판</h1>
      <div className="MainText">{NaeYong}</div>
      <input value={NaeYong} placeholder="입력해주세요" onChange={PushText} />
    </div>
  );
}
