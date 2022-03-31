import React, {useMemo} from 'react';
import './CategoryPage.scss'
import {CategoryType, RecipeType} from "../../types/Types";
import {useParams} from "react-router-dom";
import RecipeBlock from "../../component/RecipeBlock/RecipeBlock";
import Navbar from "../../component/Navbar/Navbar";

type Props = {
    recipes: Array<RecipeType>
    category: Array<CategoryType>
}

const CategoryPage = ({recipes, category}: Props) => {

    const params = useParams<'slug'>()


    const recipeInCategory = useMemo(() => {
        return recipes.filter(item => item.slug.includes(`${params.slug}`))
    }, [params.slug])

    const selectCategory = useMemo(() => {
        return category.find(item => item.slug === `/${params.slug}`)
    }, [params.slug])

    if (recipeInCategory && selectCategory) {
        return (
            <div className='wrapper--category_page'>
                <div className='category_page__item'>
                    <div className='item__about'>
                        <h1>{selectCategory.categories_name}</h1>
                        <span>{selectCategory.descriptionCategories}</span>
                    </div>
                    <div className='about__recipe_block'>
                    {recipeInCategory.map(({
                                             name, cookingTime, aboutTheRecipes,
                                             id, photoRecipe,foodType
                                         }) =>
                        <RecipeBlock
                            key={id} name={name} cookingTime={cookingTime} aboutTheRecipes={aboutTheRecipes}
                            photoRecipe={photoRecipe} foodType={foodType}
                            id={id}
                        />)}
                    </div>
                </div>
                    <Navbar/>
            </div>
        );
    }

    return <div>Oops not Found</div>

};

export default CategoryPage;