import React, { Component } from 'react';
import { connect } from 'react-redux'

import Ingredient from './Ingredient'

class DisplayIngredient extends Component {
    render(){
        const { ingredients, displayIngredients } = this.props
        return(
            <div>
                {displayIngredients
                    .map((ingredient) =>(
                        <Ingredient key={ingredient} id={ingredient} brand={ingredients[ingredient].brand} />
                        
                ))}
            </div>
        )
    }
}

function mapStateToProps({ingredients}){

    return{
        ingredients,
    }
  }

export default connect(mapStateToProps)(DisplayIngredient);