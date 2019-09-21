import React, {Fragment} from 'react';
import {Header} from './Header';
import {Slider} from './Slider'

import './common.css';

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
          <Slider/>
      </main>
      <footer>

      </footer>
    </Fragment>
  );
}

export default App;
