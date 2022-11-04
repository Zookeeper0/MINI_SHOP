import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import AppStateContext from '../contexts/AppStateContext';

const Aside = styled.aside`
  flex: 2;
  padding: 10px;
`;
const OrderNo = styled.div`
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

const OrderYes = styled.div`
  border: 0.05rem solid #f6f6f6;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const OrderBody = styled.div`
flex: 1 1 auto;
padding: 0.6rem 0.8rem;
padding-bottom: 0;`
;

const Item = styled.div`
  align-content: space-between;
  align-items: center;
  display: flex;
`;

const Video = styled.video`
  margin: 0.4rem 0.4rem 0.4rem 0.2rem;
  border-radius: 4px;
  max-width: 30px;
`;

const Content = styled.div`
  flex: 1 1 auto;`;

const ItemTitle = styled.p`
flex: 1 1 auto;
line-height: 1rem;
font-size: 0.9rem;`;

const Action = styled.button`
  flex: 0 0 auto;
  background: transparent;
  border-color: transparent;
`;

const Total = styled.div`
  flex: 0 0 auto;
  padding: 0.8rem;
  font-size: 1.1rem;
`;

const Price = styled.div`
  background: #fff;
  line-height: 2rem;
  transition: all 0.2s ease;
  font-size: 15px;
  background: transparent;
  border-color: transparent;
  color:#021d49;
  opacity: 0.5;
  `;

const Button = styled.button`
  cursor: pointer;
  transition: all 0.2s ease;
  vertical-align: middle;
  height: 2rem;
  background: transparent;
  border-color: transparent;
  border-radius: 6px;
`;




const Order = () => {

  const {orders} = useContext(AppStateContext);
  const { prototypes } = useContext(AppStateContext);
  const { remove } = useContext(AppStateContext);
  const { removeAll } = useContext(AppStateContext);

  const totalPrice = useMemo(() => {
    return orders.map(order => {
      const {id, quantity} = order;
      const prototype = prototypes.find(p => p.id === id);
      return prototype.price * quantity;
    }).reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);


  if(orders.length === 0) {
    // 주문이 하나도 없을 경우 화면
    return (
      <Aside>
        <OrderNo>
          <Title>아직 주문이 없어요</Title>
          <Title>+ 를 눌러 아이템을 추가해주세요</Title>
        </OrderNo>
      </Aside>
    );
  } else {
    // 주문 장바구니에 상품이 하나라도 들어갔을 경우 화면
    return (
      <Aside>
        <OrderYes>
          <OrderBody>
            {orders.map((order) => {
              const { id } = order;
              const prototype = prototypes.find((p) => p.id === id);
              const clickDelete = () => {
                remove(id);
              };

              return (
                <Item key={id}>
                  <div className="img">
                    <Video src={prototype.thumbnail}></Video>
                  </div>
                  <Content>
                    <ItemTitle>
                      {prototype.title} x {order.quantity}
                    </ItemTitle>
                  </Content>
                  <Action>
                    <Price>
                      $ {prototype.price * order.quantity}
                      <Button onClick={clickDelete}>
                        <div class="material-icons">close</div>
                      </Button>
                    </Price>
                  </Action>
                </Item>
              );
            })}
          </OrderBody>
          <Total>
            <hr />
            <Item>
              <Content>Total</Content>
              <Action>
                <Price>
                  $ {totalPrice}
                  <Button onClick={removeAll}>
                    <div class="material-icons">delete</div>
                  </Button>
                </Price>
              </Action>
            </Item>
            <Button
              style={{
                width: "100%",
                marginTop: 20,
                background: "rgb(255, 102, 97)",
                borderColor: "rgb(255, 102, 97)",
                color: "#021d49",
              }}
            >
              Checkout
            </Button>
          </Total>
        </OrderYes>
      </Aside>
    );
    
  }
}

export default Order