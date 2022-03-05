import React, {useMemo, useState} from 'react';
import './SearchPage.scss'
import {RecipeType} from "../../types/Types";
import {useNavigate, useParams} from "react-router-dom";
import Search from "../../component/Search/Search";
import RecipeBlock from "../../component/RecipeBlock/RecipeBlock";

type Props = {
    recipes: Array<RecipeType>
}

const SearchPage = ({recipes}: Props) => {

    const [valueInp, setValueInp] = useState<string>('')

    const params = useParams<'query'>()
    const navigate = useNavigate()

    const findRecipe = useMemo(() => {
        return recipes.filter(item => item.name.toLowerCase().includes(`${params.query}`)
            || item.foodType.toLowerCase().includes(`${params.query}`)
        )
    }, [params.query])


    const onSearch = () => {
        if (!valueInp){
            navigate('/search/search')
        }else{navigate(`/search/${valueInp.toLowerCase()}`)}
    }

    return (
        params.query === 'search'
            ? <div className='wrapper--search_page'>
                <h3>Введите название рецепта</h3>
                <Search setValueInp={setValueInp} onSearch={onSearch} valueInp={valueInp}/>
            </div>
            : <div className='wrapper--search_page'>
                {findRecipe.length
                    ? <div className='wrapper--search_page'>
                        <h3>Введите название рецепта</h3>
                        <Search setValueInp={setValueInp} onSearch={onSearch} valueInp={valueInp}/>
                        <figure>По вашему запросу найдено {findRecipe.length} рецептов</figure>
                        {findRecipe.map(({
                                             name, cookingTime, aboutTheRecipes,
                                             id, photoRecipe, foodType
                                         }) =>
                            <RecipeBlock
                                key={id} name={name} cookingTime={cookingTime} aboutTheRecipes={aboutTheRecipes}
                                photoRecipe={photoRecipe} foodType={foodType}
                                id={id}
                            />)}
                    </div>
                    : <div className='wrapper--search_page'>
                        <h3>По вашему запросу рецептов не найдено</h3>
                        <Search setValueInp={setValueInp} onSearch={onSearch} valueInp={valueInp}/>
                    </div>
                }
            </div>

    )
}

export default SearchPage;