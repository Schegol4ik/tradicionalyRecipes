import React from 'react';
import './CategoryInMenu.scss'
import {useNavigate} from "react-router-dom";
import { CategoryType } from '../../../types/Types';

type Props = {
    category: Array<CategoryType>
    handleMenu: () => void

}

const CategoryInMenu = ({category, handleMenu}: Props) => {

    const navigate = useNavigate()

    return (
        <div className='wrapper--category_in_menu'>
            {category.map(({categories_name, slug}) => <span key={slug}
                                                               onClick={() => {
                                                                   navigate(`/category${slug}`)
                                                                   handleMenu()
                                                               }}>{categories_name}</span>)}
        </div>
    );
};

export default CategoryInMenu;