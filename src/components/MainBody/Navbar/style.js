import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid blue;
`;
export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.div`
  font-size: 20px;
  line-height: 15px;
  color: #fff;
  :hover {
    color: #e1dece;
    cursor: pointer;
  }
`;

export const NavbarTab = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-left: 130px;
  :hover {
    color: #e1dece;
    cursor: pointer;
  }
`;

export const Phone = styled.div`
  font-size: 18px;
  line-height: 23px;
  color: #fff;
`;
