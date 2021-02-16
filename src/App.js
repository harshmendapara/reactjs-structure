import React from 'react'
import Router from "./router.js"
import { Provider } from 'react-redux'
import store from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
          <Router />
      </div>
    </Provider>
  );
}

export default App;
