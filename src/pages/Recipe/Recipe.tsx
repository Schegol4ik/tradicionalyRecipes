import React, {useEffect, useMemo, useState} from 'react';
import './Recipe.scss'
import {InitialStateRecipeType} from "../../types/Types";
import {useParams} from "react-router-dom";
import AboutRecipe from "../../component/AboutRecipe/AboutRecipe";
import {useDispatch} from "react-redux";
import {addCommentAction, addRatingAction} from "../../redux/actions/recipes-action";

type Props = {
    recipes: InitialStateRecipeType
}

const Recipe = ({recipes}: Props) => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [rating, setRating] = useState<boolean>(false)


    const dispatch = useDispatch()
    const params = useParams()

    const findRecipe = useMemo(() => {
        return recipes.recipe.find(item => item.id === Number(params.id))
    }, [params])
    const findComments = useMemo(() => {
        return recipes.comments.filter(item => item.id === Number(params.id))
    }, [recipes.comments])
    const findRatings = useMemo(() => {
        return recipes.ratings.filter(item => item.id === Number(params.id))
    }, [params])


    useEffect(() => {
        if(findRecipe){
            if(localStorage.getItem(`${findRecipe.id}`)){
                setRating(true)
            }
        } else {
            setRating(false)
        }
    }, [findRatings])
    useEffect(() => {
    },[])

    if (findRecipe && findComments && findRatings) {

        const addedComment = () => {
            let newComment = {
                id: findRecipe.id,
                idPerson: findComments.length + 1,
                name: name,
                email: email,
                text: text
            }
            setName('')
            setEmail('')
            setText('')
            dispatch(addCommentAction(newComment))
        }

        const addRating  = (e: number) => {
            let rating = {
                id: findRecipe.id,
                numberOfRatings: e
            }
            dispatch(addRatingAction(rating))
            localStorage.setItem(`${findRecipe.id}`,`${e}`)
        }




        return (
            <div className='wrapper--recipe'>
                <AboutRecipe findRecipe={findRecipe} findComments={findComments} findRatings={findRatings}
                             setName={setName} setEmail={setEmail} setText={setText} addedComment={addedComment}
                             name={name} email={email} text={text}  addRating={addRating}
                             rating={rating}
                />
            </div>
        )
    }

    return <div>error</div>
};

export default Recipe;