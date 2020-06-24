import React from 'react';
import logo from './logo.svg';
import Recipes from './components/Recipes'
import RecipeDetails from './components/RecipeDetails'
import RecipeForm from './components/RecipeForm'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Recipes} />
          <Route path="/recipes/new" exact component={RecipeForm} />
          <Route path="/recipes/:id" component={RecipeDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
