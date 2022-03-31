import React from 'react';
import './MenuBurger.scss'
import classnames from 'classnames'
import {CategoryType} from "../../types/Types";
import CategoryInMenu from "../Category/CategoryInMenu/CategoryInMenu";
import {useNavigate} from "react-router-dom";

type Props = {
    handleMenu: () => void
    isMenu: boolean
    category: Array<CategoryType>

}

const MenuBurger = ({isMenu, handleMenu, category}: Props) => {

    const navigate = useNavigate()


    return (
        <div className={classnames('wrapper--menu_burger', {
            ['active']: isMenu
        })}>
            <span onClick={() => {
                navigate('/search/search')
                handleMenu()
            }}>Поиск по сайту</span>
            <span onClick={() => {
                navigate('/addRecipe')
                handleMenu()
            }}>Добавить свой рецепт</span>
            <div>
                <CategoryInMenu category={category} handleMenu={handleMenu}/>
            </div>
        </div>
    );
};

export default MenuBurger;