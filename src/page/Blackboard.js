import { useState } from "react";

export default function BlackBoard() {
  const [NaeYong, CNaeYong] = useState([""]);
  const [Test, SetTest] = useState([""]);

  const PushText = (e) => {
    CNaeYong(e.target.value);
  };

  function EnterKey(e) {
    if (e.key == "Enter") {
      SetTest(NaeYong + "\n");

      CNaeYong("");
    }
  }

  return (
    <div className="App">
      <h1>디지털 칠판</h1>
      <div className="MainText">
        {Test}

        {NaeYong}
      </div>
      <input
        value={NaeYong}
        placeholder="입력해주세요"
        onChange={PushText}
        onKeyPress={EnterKey}
      />
    </div>
  );
}
