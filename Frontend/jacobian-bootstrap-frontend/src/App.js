import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Links from './components/Links';
import Resume from './components/Resume';
import Gallery from './components/Resume';
import './App.css'

class App extends Component {    
  
  
  constructor(props)
  {
      document.title = "JDella1996's Website";
      super(props); 
  }
  
  render() {


    return (
        <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/contact" component={Contact} exact/>
             <Route path="/links" component={Links} exact/>
             <Route path="/blog" component={Blog} exact/>
             <Route path="/resume" component={Resume} exact/>
             <Route path="/Gallery" component={Gallery} exact/>
             <Route component={Error}/>

           </Switch>
        </div> 
      </BrowserRouter>
     );
  }
}
 
export default App;