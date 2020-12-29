import React, { Component } from 'react'
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux'

import { ItemTypes } from './Constants';
import { moveInRecipe } from '../actions/ingredients'

// phone DnD spec
const ingredientSpec = {
    beginDrag(props){
        return{
            name: props.brand,
            id: props.id
            
        }
    },
    endDrag(props, monitor, component){
        if (monitor.didDrop()){
            const dragItem = monitor.getItem();
            const dropResult = monitor.getDropResult();           
            console.log("You dropped ", dragItem.name, ' into '+ dropResult.name)
             // Move action goes here
            props.dispatch(moveInRecipe(dragItem.id))
        }else{
            return;
        }
    }
}

// phone DragSource collect
let collect = ( connect, monitor ) =>{
    return{
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Ingredient extends Component{
    render(){
        const { brand } = this.props;
        const { isDragging, connectDragSource } = this.props;

        const opacity = isDragging? 0.4: 1;
        const style={
            opacity: opacity
        };
        const ingredientClass = isDragging? 'ui card ingredient drag': 'ui card ingredient';
        return connectDragSource(
            <div className={ingredientClass} style={style}>
                <div className="image"><img src="/images/phone.jpg" /></div>
                <div className="content">
                    <div className="ingredient-name">{ brand }</div>
                    <div className="meta">8G RAM, 16G memory</div>
                </div>
                <div className="extra content">
                    <a>
                    <i aria-hidden="true" className="money icon"></i>
                    $ 80
                    </a>
                </div>
            </div>
        )
    }
}

export default connect()(DragSource(ItemTypes.INGREDIENT, ingredientSpec, collect)(Ingredient));