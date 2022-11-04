import React from 'react'
import styled from 'styled-components'

const Main = styled.header`
  padding: 10px;
  text-align: center;
  background-color: #fff;
`;
const HeadContainer = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const SubTitle = styled.div`
  font-size: 22px;
  line-height: 30px;
  margin: 16px 0px 0px;
  color: rgb(71, 71, 71);
  font-weight: 500;
`;
const ButtonWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
`;
const A = styled.a`
  display: inline-block;
`;
const Button = styled.button`
  display: inline-block;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid rgb(255, 102, 97);
  background-color: rgb(255, 102, 97);
  font-size: 20px;
  line-height: 22px;
  padding: 12px 24px;
  color: rgb(255, 255, 255);
`;

const Header = () => {
  return (
    <Main>
      <HeadContainer>
        <Title>Mini Shop</Title>
        <SubTitle>
        Put your stuff up and sell it easily anytime, anywhere I need to save time.
        </SubTitle>
        <ButtonWrapper>
          <A href="https://eastzoo.co.kr/">
            <Button>who made it</Button>
          </A>
        </ButtonWrapper>
      </HeadContainer>
    </Main>
  )
}

export default Header
