import React from 'react';
import { BrowserRouter, Route ,Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Postdetailpage from './pages/PostDetailPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'
import Searchpage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
   
      <header className="header">
      <Link to='/' className="header">
      
        GoRefer
        </Link>
        <Link to={'/searchPage'}>
        <FontAwesomeIcon className="header" icon={faSearch}/>
        </Link>
      </header>
      <main className="main">
        <div className="content">
          <Route path="/" exact={true} component={Homepage} />
          <Route path="/postDetailPage" component={Postdetailpage}/>
          <Route path="/searchPage" component={Searchpage}/>

        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
