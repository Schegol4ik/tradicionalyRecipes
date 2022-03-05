import React from 'react';
import './AboutRecipe.scss'
import {CommentType, RatingType, RecipeType} from '../../types/Types';
import Navbar from "../Navbar/Navbar";
import Ingredients from "./AboutRecipeComponents/Ingredients/Ingredients";
import Steps from "./AboutRecipeComponents/Steps/Steps";
import ShareAndRating from "./AboutRecipeComponents/ShareAndRating/ShareAndRating";
import Comments from "./AboutRecipeComponents/Comments/Comments";


type Props = {
    findRecipe: RecipeType
    findComments: Array<CommentType>
    findRatings: Array<RatingType>
    setName: (value: string) => void
    name: string
    setEmail: (value: string) => void
    email: string
    setText: (value: string) => void
    text: string
    addedComment: () => void
    addRating: (e: number) => void
    rating: boolean
}

const AboutRecipe = ({findRecipe, findComments, findRatings, addRating,rating,
                         setName, name, setEmail, email, setText, text, addedComment}: Props) => {

    return (
        <div className='wrapper--aboutRecipe'>
            <img src={findRecipe.photoRecipe} alt=""/>
            <div className='item__content'>
                <div className='item__aboutRecipe'>
                    <div className='item__description'>
                        <h1>{findRecipe.name}</h1>
                        <span>{findRecipe.aboutTheRecipes}</span>
                    </div>
                    <Ingredients ingredients={findRecipe.ingredients}/>
                    <Steps steps={findRecipe.steps} cookingTime={findRecipe.cookingTime}/>
                    <div className='item__bonAppetit'>
                        <span>{findRecipe.bonAppetit}</span>
                    </div>
                    <ShareAndRating findRatings={findRatings} addRating={addRating} rating={rating}/>
                    <Comments findComments={findComments} setName={setName} setEmail={setEmail}
                              setText={setText} addedComment={addedComment} name={name} text={text}
                              email={email}
                    />
                </div>
                <Navbar/>
            </div>
        </div>
    );
};

export default AboutRecipe;