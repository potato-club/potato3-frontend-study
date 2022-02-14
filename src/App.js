import "./App.css";
import styled from "@emotion/styled";
import { Blackboard } from "./page/Blackboard";

function App() {
  return (
    <Wrapper>
      <Blackboard />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
