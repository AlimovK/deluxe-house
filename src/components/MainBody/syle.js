import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #191919;
`;
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${({ column }) => column && "column"};
`;
