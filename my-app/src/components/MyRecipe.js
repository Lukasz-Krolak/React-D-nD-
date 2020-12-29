
import React, { Component } from 'react';


class MyRecipe extends Component {
    render(){
        return(
            <div>
                <div className="ui cards">
                    <div className="ui card centered">
                        <div className="content">
                            <div className="header">Test_Ingredient</div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <button className="ui green basic button">ADD</button>
                                <button className="ui red basic button">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyRecipe;