import React, {useMemo} from 'react';
import './SearchPage.scss'
import {RecipeType} from "../../types/Types";
import {useParams} from "react-router-dom";
import Search from "../../component/Search/Search";
import RecipeBlock from "../../component/RecipeBlock/RecipeBlock";

type Props = {
    recipes: Array<RecipeType>
}

const SearchPage = ({recipes}: Props) => {

    const params = useParams<'query'>()

    const findRecipe = useMemo(() => {
        return recipes.filter(item => item.name.toLowerCase().includes(`${params.query}`)
            || item.foodType.toLowerCase().includes(`${params.query}`)
        )
    }, [params.query])


    return (
        params.query === 'search'
            ? <div className='wrapper--search_page'>
                <div>
                    <Search/>
                </div>
            </div>
            : <div>
                {findRecipe.length
                    ? <div>
                        <Search/>
                        <span>По вашему запросу найдено {findRecipe.length} рецептов</span>
                        {findRecipe.map(({
                                             name, cookingTime, aboutTheRecipes,
                                             id, photoRecipe,foodType
                                         }) =>
                            <RecipeBlock
                                key={id} name={name} cookingTime={cookingTime} aboutTheRecipes={aboutTheRecipes}
                                photoRecipe={photoRecipe} foodType={foodType}
                                id={id}
                            />)}
                </div>
                    : <div>
                        <Search/>
                    </div>
                }
            </div>

    )
}

export default SearchPage;