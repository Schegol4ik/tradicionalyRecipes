import React from 'react';

import './Header.scss'
import {useNavigate} from "react-router-dom";
import logo from '../../assets/images/myLogo.png'
import Category from "../Category/Category";
import {BiBookAdd} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai";
import Links from "../Links/Links";
import {CategoryType} from "../../types/Types";
import MenuBurger from "../Menu/MenuBurger";

type Props = {
    category: Array<CategoryType>
}

const Header = ({category}: Props) => {

    const navigate = useNavigate()


    return (
        <div className='wrapper__header'>
            <div className='header__container'>
                <div className='header__main'>
                    <div className='main__logo'>
                        <img src={logo} alt="logo" onClick={() => {
                            navigate('/')
                            console.log('click!')
                        }}/>
                        <h1>РецептЫ</h1>
                    </div>
                    <div className='main__icons'>
                        <BiBookAdd className='item__icon' onClick={() => navigate('/addRecipe')}/>
                        <AiOutlineSearch onClick={() => navigate(`/search/search`)} className='item__icon'/>
                    </div>
                    <MenuBurger/>
                </div>
                <Links/>
                <Category category={category}/>
            </div>
        </div>
    );
};

export default Header;