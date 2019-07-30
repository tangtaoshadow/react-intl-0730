import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <FormattedHTMLMessage id="app.text"
                              defaultMessage="杭州电子科技大学 唐涛 管理学院 2016级 tangtao2099@outlook.com "
                              description="杭州电子科技大学 唐涛 "
                              values={{ what: 'react-intl' }}/>
        </p>
        <a className="App-link" href="https://www.woaihdu.top" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="app.learn-react-link"
                              defaultMessage=""
                              description="Link on react page"/>
        </a>
      </header>
    </div>
  );
}

export default App;
