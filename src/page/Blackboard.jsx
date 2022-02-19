import React, { useState } from 'react';
import './Blackboard.css';

export const Blackboard = () => {
  const [text, setText] = useState('');

  return (
    <div className="container">
      <h1 className="title">디지털 칠판</h1>
      <div className="blackboard">
        <p className="blackboard-text">{text}</p>
      </div>
      <input
        className="blackboard-input"
        placeholder="입력해주세요"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>
    </div>
  );
};
