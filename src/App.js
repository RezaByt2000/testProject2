import React from 'react';

// global styles
import './App.css'

// components
import AsideList from './components/asideList/AsideList';
import Main from './components/main/Main';



const App = () => {
  return (
   <div>
      <main className='d-flex flex-row'>
          <AsideList />
          <Main />
      </main>
   </div>
  );
};

export default App;