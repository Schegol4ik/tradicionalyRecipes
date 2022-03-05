import React from 'react';
import './Main.scss'
import {InitialStateRecipeType} from "../../types/Types";
import RecipeBlock from "../../component/RecipeBlock/RecipeBlock";

type Props = {
    recipes: InitialStateRecipeType
}

const Main = ({recipes}: Props) => {

    return (
        <div className='wrapper--main'>
            
            {recipes.recipe.map(({
                                     name, cookingTime, aboutTheRecipes,
                                     id, photoRecipe,foodType
                                 }) =>
                <RecipeBlock
                    key={id} name={name} cookingTime={cookingTime} aboutTheRecipes={aboutTheRecipes}
                    photoRecipe={photoRecipe} foodType={foodType}
                    id={id}
                />)}
        </div>
    );
};

export default Main;