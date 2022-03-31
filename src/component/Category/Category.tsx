import React from 'react';
import './Category.scss'
import {CategoryType} from "../../types/Types";
import {useNavigate} from "react-router-dom";

type Props = {
    category: Array<CategoryType>
}

const Category = ({category}: Props) => {

    const navigate = useNavigate()

    return (
        <nav className='wrapper--category'>
            {category.map(({categories_name, slug}) => <button key={slug}
                onClick={() => navigate(`/category${slug}`)}>{categories_name}</button>)}
        </nav>
    );
};

export default Category;