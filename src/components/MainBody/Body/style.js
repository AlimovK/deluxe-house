import styled from "styled-components";
import Bg from "../../../assets/img/bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 876px;
  background-image: url(${Bg});
  background-size: cover;
`;
export const Title = styled.img`
  width: ${({ main }) => (main ? `748px` : `410px`)};
  height: ${({ main }) => (main ? `124px` : `74px`)};
  margin-top: ${({ top }) => top && `30px`};
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 220px;
  height: 62px;
  background: #ffffff;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background: #e1dece;
  }
`;
