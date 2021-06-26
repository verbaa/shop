import React from 'react';
import { Provider } from 'react-redux';

import store from "./services/store";
import history from "./services/history";
import { AppContainer } from "./AppContainer";
import "./shared/styles/main.scss";
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline";



import {theme} from "./theme";

function App() {
  return (
     <ThemeProvider theme={theme    }>
          <Provider store={store}>
              <CssBaseline/>
              <AppContainer
                  history={history}
              />
          </Provider>
     </ThemeProvider>

  );
}

export default App;
