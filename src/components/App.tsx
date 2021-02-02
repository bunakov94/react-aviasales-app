import React from 'react';
import 'focus-visible';
import Header from './layout/Header';
import Filter from './blocks/Filter';
import Tabs from './blocks/Tabs';
import CardList from './layout/CardList';

import './App.scss';

//3.3.15

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <div className="filter">
        <Filter />
      </div>
      <div className="tabs-list">
        <div className="tabs">
          <Tabs />
        </div>
        <div className="card-list">
          <CardList />
        </div>
      </div>
    </main>
  </>
);

export default App;
