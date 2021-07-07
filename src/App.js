import React from 'react';
import { Provider } from 'react-redux';

import history from "./services/history";
import queryClient from "./services/queryClient";
import { AppContainer } from "./AppContainer";
import "./shared/styles/main.scss";
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline";
import {QueryClientProvider} from "react-query";



import {theme} from "./theme";
import store from "./services/store";

// import {store} from "./store";

function App() {
  return (
     <ThemeProvider theme={theme }>
          <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                  <CssBaseline/>
                  <AppContainer
                      history={history}
                  />
              </QueryClientProvider>
          </Provider>
     </ThemeProvider>

  );
}

export default App;
