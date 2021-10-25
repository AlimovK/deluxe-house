import styled from "styled-components";
import { ReactComponent as call } from "../../../assets/icons/call.svg";

export const Container = styled.div`
  display: flex;
  /* height: 50px; */
  align-items: center;
  border: 1px solid blue;
`;
export const Wrapper = styled.div`
  border: 1px solid yellow;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.div`
  font-size: 20px;
  line-height: 15px;
  color: #fff;
`;

export const NavbarTab = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-left: 130px;
`;
export const CallIcon = styled(call)`
  width: 20px;
  fill: red;
  polygon {
    fill: red;
  }
`;
export const Phone = styled.div`
  font-size: 18px;
  line-height: 23px;
  color: #fff;
`;
