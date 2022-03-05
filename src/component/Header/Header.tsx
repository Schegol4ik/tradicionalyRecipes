import React from 'react';
import './Header.scss'
import {useNavigate} from "react-router-dom";
import logo from '../../assets/images/myLogo.png'
import Category from "../Category/Category";
import { BiBookAdd } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Links from "../Links/Links";
import {CategoryType, InitialStateRecipeType} from "../../types/Types";

type Props = {
    category : Array<CategoryType>
}

const Header = ({category}: Props) => {

    const navigate = useNavigate()

    return (
        <div className='wrapper--header'>
            <div className='header__mainInf'>
                <img src={logo} alt="logo" onClick={() => {navigate('/')}}/>
                <Links/>
                <div>
                    <BiBookAdd className='item__icon'/>
                    <AiOutlineSearch onClick={() => navigate(`/search/search`)} className='item__icon'/>
                </div>
            </div>
            <Category category={category}/>
        </div>
    );
};

export default Header;