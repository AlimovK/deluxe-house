import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: #191919;
  justify-content: space-around;
  align-items: center;
`;
export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const NavbarTab = styled(Link)`
  font-size: 17px;
  padding: 10px;
  text-decoration: none;
  line-height: 16px;
  color: #ffffff;
  margin-left: 130px;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #e1dece;
    cursor: pointer;
    border-bottom: 1px solid #e1dece;
  }
`;

export const Phone = styled.div`
  font-size: 18px;
  line-height: 23px;
  color: #fff;
`;
