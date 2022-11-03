import React from "react";
import styled from "styled-components";
import Order from "./components/Order";
import Prototypes from "./components/Prototypes";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import AppStateProvider from "./providers/AppStateProvider";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1000px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.7fr 0.3fr;
    grid-template-rows: auto 1fr auto;
  }
`;

function App() {
  return (
    <AppStateProvider>
      <Header />
      <Container>
        <Prototypes />
        <Order />
      </Container>
      <Footer />
    </AppStateProvider>
  );
}

export default App;
