import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import '../index.css'
import { _getIngredients } from '../utils/_DATA'
import { receiveIngredients } from '../actions/ingredients'
import Container from './container.js'


class App extends Component {
  componentDidMount(){
    _getIngredients()
      .then((ingredients) =>{
        this.props.dispatch(receiveIngredients(ingredients))
      })
  }
  render(){
 
    return (
      <Container />
    );
  }
}


export default connect()(App);