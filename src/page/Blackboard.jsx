import styled from "@emotion/styled";
import { useState } from "react";

export const Blackboard = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const onChange = e => {
    setInput(e.target.value);
  };

  const onEnter = e => {
    if (e.key === "Enter") {
      setList(list.concat(input));
      setInput("");
    }
  };
  

  return (
    <Wrapper>
      <ContentsArea>
        {list.map((data, index) => (
          <Contents key={index} >{data}</Contents>
        ))}
      </ContentsArea>
      <Input
        placeholder="입력해주세요"
        onChange={onChange}
        onKeyPress={onEnter}
        value={input}
      ></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentsArea = styled.div`
  width: 50vw;
  height: 30vh;
  background-color: #2a7539;
  box-sizing: border-box;
  border: solid 1px;
  border-bottom: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    opacity: 0;
  }
`;
const Contents = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 50vw;
  height: 3vh;
  text-align: center;
  box-sizing: border-box;
  border-top: 0;
  border: solid 1px;
`;
