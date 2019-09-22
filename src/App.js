import React, {Fragment} from 'react';
import {Header} from './Header';
import {Slider} from './Slider';
import {Available} from './Available';
import {Advantage} from './Advantage';
import {PopularProducts} from './PopularProducts';

import './common.css';

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
          <Slider/>
          <Available/>
          <Advantage/>
          <PopularProducts/>
      </main>
      <footer>

      </footer>
    </Fragment>
  );
}

export default App;
