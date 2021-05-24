import React, { useContext } from 'react';
import './App.scss';

import { ModalProvider, ModalContext } from "./contexts";
import { Advantages, Button, Header, Logo, Hero, Quiz, Social } from "./components";

function App() {

  const { openModal } = useContext(ModalContext);

  const handleClickFirstButton = () => {
    openModal({
        title: 'Opened by First Button',
        children: "MODAL MODAL MODAL"
    });
}

  return (
    <ModalProvider>
      <div className="App">
        <Header>
          <Logo classes="header__logo"/>
        </Header>
        <Hero
          beforeContent={<Social />}
          title="Хотите отправиться в&nbsp;незабываемое путешествие вместе с&nbsp;GoTravel?" subtitle="Пройдите тест и получите 5 вариантов туров, подходящих лично для вас"
          afterContent={<Advantages />}
          >
          <Button
              onClick={handleClickFirstButton}
              classes="btn--primary hero__button"
              text="Пройти тест"
          />
          <Button
          text="Пройти тест"
          classes="btn--primary hero__button"
          onClick={handleClickFirstButton}></Button>
        </Hero>
        <Quiz></Quiz>
      </div>
    </ModalProvider>
  );
}

export default App;
