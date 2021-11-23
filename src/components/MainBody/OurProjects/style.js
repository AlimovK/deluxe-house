import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 108px;
  background: #191919;
`;
export const Title = styled.div`
  width: 375px;
  height: 45px;
  font-weight: bold;
  font-size: 40px;
  line-height: 45px;
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  flex-wrap: wrap;
`;
export const ImgWrapper = styled.div``;
export const Des = styled.div`
  width: 500px;
  text-align: center;
  height: 18px;
  font-size: 16px;
  line-height: 18px;
  color: white;
`;
export const Img = styled.img`
  margin-top: 50px;
  width: 500px;
  height: 500px;
`;
