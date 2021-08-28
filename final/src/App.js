import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import customtheme from './components/theme';
import store from './redux/CryptoStore';
import PageRouting from './utils/PageRouting';

const App = () => {
  return (
    <div>
      <ThemeProvider theme = {customtheme}>
        <Provider store = {store}>
          <React.StrictMode>
            <BrowserRouter>
              <PageRouting/>
            </BrowserRouter>
          </React.StrictMode>
        </Provider>
      </ThemeProvider> 
    </div>
  );
};

export default App;