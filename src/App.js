import React, { Component } from 'react';
import { Navbar,Home } from '../src/components/layout';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GlobalStyle } from './theme';
import { Provider } from './Context';
import Lyrics from './components/tracks/Lyrics';


 class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <React.Fragment>
          <GlobalStyle />
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
      </Provider>    
      );
  }
}

export default App;
