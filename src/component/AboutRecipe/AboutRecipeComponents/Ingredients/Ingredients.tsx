import React from 'react';
import {IngredientsType, RecipeType} from "../../../../types/Types";
import {BsBasket3} from "react-icons/bs";

type Props = {
    ingredients: Array<IngredientsType>
}

const Ingredients = ({ingredients}: Props) => {
    return (
        <div className='item__ingredients'>
            <div className='ingredients__title'>
                <BsBasket3 color='#F35431' size='20px'/>
                <h3>Ингредиенты</h3>
            </div>
            <div className='ingredients__about'>
                <div>
                    {ingredients.map(({ingredientName}) => <span key={ingredientName}
                                                                 className='ingredients__name'>
                                {ingredientName}</span>)}

                </div>
                <div>
                    {ingredients.map(({amount}) => <span key={amount}
                                                         className='ingredients__amount'>
                                {amount}</span>)}

                </div>
            </div>
        </div>
    );
};

export default Ingredients;