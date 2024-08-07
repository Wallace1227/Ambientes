import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  margin-top: 50px;
  gap: 50px;
`;

export const ContainerImg = styled.img`
  width: 348px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #7d7987;
  margin-bottom: 10px;
  text-align: center;
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eceff2;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Link = styled.a`
  font-size: 20px;
  color: #ff9900;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 20px;
  text-decoration: underline;

  &:hover {
    color: #f00;
  }
`;

export const SubTitle = styled.span`
  color: #ff9900;
`;

export const SubTextBold = styled.span`
  font-weight: bold;
  color: #7d7987;
`;

export const ContainerBalls = styled.img`
  position: fixed;
  right: 0px;
  bottom: 0px;
`;
