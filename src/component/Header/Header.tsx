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
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


type Props = {
    category: Array<CategoryType>
    handleMenu: () => void
    isMenu: boolean
}

const Header = ({category, handleMenu, isMenu}: Props) => {

    const navigate = useNavigate()


    return (
        <div className='wrapper__header'>
            <div className='header__container'>
                <div className='header__main'>
                    <div className='main__logo' onClick={() => {
                        navigate('/tradicionalyRecipes')
                    }}>
                        <img src={logo} alt="logo"/>
                        <h1>РецептЫ</h1>
                    </div>
                    <div className='main__icons'>
                        <BiBookAdd className='item__icon' onClick={() => navigate('/addRecipe')}/>
                        <AiOutlineSearch onClick={() => navigate(`/search/search`)} className='item__icon'/>
                    </div>
                    <div className='main__burger'>
                        {isMenu
                            ? <AiOutlineClose size={20} onClick={() => handleMenu()}/>
                            : <AiOutlineMenu onClick={() => handleMenu()} size={20}/>
                        }
                    </div>
                </div>
                <Links/>
                <Category category={category}/>
                <div>
                    <MenuBurger isMenu={isMenu} handleMenu={handleMenu} category={category}/>
                </div>
            </div>
        </div>
    );
};

export default Header;