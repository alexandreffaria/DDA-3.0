import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,
         Routes,
         Route,
} from "react-router-dom"
import './index.css';
import App from './App';
import Metodologia from './routes/metodologia';
import Servicos from './routes/servicos'
import Portfolio from './routes/portfolio';
import Contato from './routes/contato';
import NotFound from './routes/404'
import Home from './routes/home'


ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} > 
          <Route index element={<Home />} />
          <Route path='servicos' element={<Servicos />} />
          <Route path='metodologia' element={<Metodologia/>} />
          <Route path='portfolio' element={<Portfolio/>} />
          <Route path='contato' element={<Contato/>} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  , document.getElementById('root')
);
