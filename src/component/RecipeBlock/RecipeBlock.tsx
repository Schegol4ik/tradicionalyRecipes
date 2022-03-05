import React from 'react';
import './RecipeBlock.scss'
import {useNavigate} from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";

type Props = {
    name: string,
    cookingTime: { h: string, m: string }
    aboutTheRecipes: string
    photoRecipe: string
    id: number
    foodType: string
}

const RecipeBlock = ({name, aboutTheRecipes, cookingTime, photoRecipe,foodType, id}: Props) => {

    const navigate = useNavigate()

    return (
        <div className='wrapper--recipeBlock'>
            <img src={photoRecipe} alt="Фото рецепта"/>
            <div className="item__recipeBlock">
                <h4 onClick={() => {navigate(`/recipe/${id}`)}}>{name}</h4>
                <div className='item__info'>
                    <span><AiOutlineClockCircle color='#F35431' size='20px'/> {cookingTime.h}ч. {cookingTime.m}мин.</span>
                    <span><BiRestaurant color='#F35431' size='20px' />{foodType}</span>
                </div>
                <span>{aboutTheRecipes}</span>
            </div>
        </div>
    );
};

export default RecipeBlock;