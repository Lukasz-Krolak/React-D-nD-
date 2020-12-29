let ingredients = {
    Techno:{
        brand: "Techno",
        inRecipe: 'false' // or "in"
    },
    Apple:{
        brand: "Iphone",
        inRecipe: "false"
    },
    Samsung:{
        brand: "Samsung",
        inRecipe: "false" 
    },
    Hauwei:{
        brand: "Hauwei",
        inRecipe: "true"
    },
    HTC:{
        brand: "HTC",
        inRecipe: "true"
    }
}
export function _getIngredients (){
    return new Promise((res, rej) =>{
        setTimeout(() => res({...ingredients}), 1000);
    });
}
export function setInRecipe({id, inRecipe}){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            ingredients = {
                ...ingredients,
                [id]:{
                    ...ingredients[id],
                    inRecipe: inRecipe
                }
            }
            res()
        }, 500);
    });
}