import { useState } from "react";

const Blackboard = () => {
  const [text, settext] = useState("디지털 칠판입니다.");

  const change = (e) => {
    settext(e.target.value);
  };

  return (
    <div>
      <p className="title">디지털 칠판</p>
      <div className="wrapper">
        <div className="board">
          <span>{text}</span>
        </div>
        <input
          className="board-text"
          placeholder="입력해주세요"
          onChange={change}
        ></input>
      </div>
    </div>
  );
};

export default Blackboard;
