import React from 'react'
import styled from 'styled-components'

const Aside = styled.aside`
  padding: 10px;
  flex: 2;
`;
const OrderWrapper = styled.div`
  background-color: #fff;
  border: 0.05rem solid #fff;
  color: var(--primary-alpha);
  border-radius: 6px;
  padding: 3.2rem 1.6rem;
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