import React, { useContext } from 'react'
import styled from 'styled-components'
import AppStateContext from '../contexts/AppStateContext';

const Main = styled.main`
  padding: 8px;
`;

const PrototypesMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
`;

const Prototype = styled.div`
  border: 0.01rem solid #fff;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const A = styled.a`
  background-color: transparent;
  &:active,
  &:hover {
    outline-width: 0;
  }
`;

const Video = styled.video`
  width: 100%;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

const Botton = styled.div`
  background: #021d49;
  color:#fff;
  cursor:pointer;
  display: inline-block;
  vertical-align: middle;
  border-radius: 6px;
  transition: all 0.2s ease;
  height: 25px;
  padding: 2px 6px;
  float: right !important;

  &:hover {
    color: #021d49;
    background: #ff4d4f;
  }
`;

const Title = styled.div`
  padding: 12px;
  padding-bottom: 0;
  font-size: 1.2rem;
  line-height: 1.4;
  font-size: 1.2rem;
  color: var(--secondary);
`;

const Price = styled.p`
  padding: 12px;
  padding-top: 1px;
  padding-bottom: 12px;
  color: gray;
`;

const Description = styled.p`
  padding: 12px;
  font-size: 14px;
  line-height:1.5;
`;

const Prototypes = () => {
  
  const {prototypes} = useContext(AppStateContext);

  return (
    <Main>
      <PrototypesMain>
        {prototypes.map((prototype) => {
        const {id, thumbnail, title, price , desc, pieUrl} = prototype;
        return (
          <Prototype key={id}>
            <A href={pieUrl} target="_BLANK" rel="noreferrer">
              <div
                style={{
                  padding: "25px 0 33px 0",
                }}
              >
                <Video
                  autoPlay
                  loop
                  playsInline
                  className="prototype__artwork prototype__edit"
                  src={thumbnail}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </A>

            <div>
              <Title>
                <Botton>
                  <div class="material-icons">add</div>
                </Botton>
                {title}
              </Title>
              <Price>$ {price}</Price>
              <Description>{desc}</Description>
            </div>
          </Prototype>
        );

      })}</PrototypesMain>
    </Main>
  )
}

export default Prototypes