import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import { Provider } from 'react-redux';
import { store } from './store'
import Formation from './components/formation/Formation';
import Competence from './components/competence/Competence';
import Wrapper from './components/wrapper/Wrapper';
import Atouts from './components/atouts/Atouts';
import Project from './components/project/Project';
import Language from './components/language/Language';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <main className="main">
          <Header />
          <Contact />
          <Wrapper>
            <div className="col_1">
              <Experience />
              <Formation />
            </div>
            <div className="col_2">
              <Competence />
              <Atouts />
              <Project />
              <Language />
            </div>
          </Wrapper>
        </main>

      </div>
    </Provider>

  );
}

export default App;
