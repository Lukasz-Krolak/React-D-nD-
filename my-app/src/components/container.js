import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from 'react-redux'

import ShoppingCart from './ShoppingCart'
import MyRecipe from './MyRecipe'
import DisplayIngredients from './DisplayIngredient'

class Container extends Component {
    render(){
        const { inRecipe_ingredients, outRecipe_ingredients } = this.props
        return(
            <div className="ui container">
                <div className="main-header">
                    <h2 className="ui icon center aligned header">
                        <i aria-hidden="true" className="mobile circular icon"></i>
                        <div className="content title">Przepisy</div>
                    </h2>
                </div>
                <div className="ui grid">
                <h1 className="mycart-header">Mój przepis</h1>
                    <div className="left floated five wide column my-recipe">                       
                        <MyRecipe />
                    </div>
                <div className="right floated five wide column">
                    <DndProvider backend={ HTML5Backend } >
                        <div className="ui row">
                            <h3 className="brand-heading">Składniki</h3>
                        </div>
                        <div className="ui row">
                            <div className="shopping-list">
                                <DisplayIngredients displayIngredients = {outRecipe_ingredients} />
                            </div>
                            <ShoppingCart inRecipe_ingredients={inRecipe_ingredients} />                            
                        </div>  
                    </DndProvider>                 
                </div>
                </div>            
            </div>            
            
        )
    }
}

function mapStateToProps({ingredients}){
    // eslint-disable-next-line eqeqeq
    const inRecipe_ingredients = Object.keys(ingredients).filter((ingredients) => ingredients[ingredients].inRecipe == 'true')
    const outRecipe_ingredients = Object.keys(ingredients).filter((ingredients) => !inRecipe_ingredients.includes(ingredients))

    return{
        inRecipe_ingredients,
        outRecipe_ingredients,
    }
  }

export default connect(mapStateToProps)(Container)