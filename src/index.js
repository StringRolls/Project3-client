import React from 'react';
//import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './components/App';


// BOOTSTRAP STYLING
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context';
import { MessageProviderWrapper } from './context/message.context';


ReactDOM.render(
  <Router>
    <MessageProviderWrapper>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </MessageProviderWrapper>
  </Router>,
document.getElementById("root")
)

