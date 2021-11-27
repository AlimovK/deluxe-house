import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #191919;
  padding: 108px;
`;
export const Title = styled.div`
  width: 500px;
  height: 45px;
  font-weight: bold;
  font-size: 40px;
  line-height: 45px;
  text-align: center;
  color: #e1dece;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e1dece;
  border-radius: 5px;
  margin-top: 50px;
`;
export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  display: flex;
  /* width: 600px; */
  flex: 1;
  height: 400px;
`;
export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 400px;
  border: 1px solid red;
`;
