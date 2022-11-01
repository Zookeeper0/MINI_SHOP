import React from 'react'
import styled from 'styled-components'

const Aside = styled.aside`
  flex: 2;
  padding: 10px;
`;
const OrderWrapper = styled.div`
  background-color: #fff;
  border: 0.05rem solid #fff;
  color: rgba(2, 29, 73, 0.5);
  border-radius: 6px;
  padding: 50px 10px;
  text-align: center;
`;
const Title = styled.div`
  margin: 0.8rem auto;
`;

const Order = () => {
  return (
    <Aside>
      <OrderWrapper>
        <Title>아직 주문이 없어요</Title>
        <Title>+ 를 눌러 아이템을 추가해주세요</Title>
      </OrderWrapper>
    </Aside>
  )
}

export default Order