import React, {useState} from 'react';
import './Navbar.scss'
import {useNavigate} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";

const Navbar = () => {

    const navigate = useNavigate()

    const [valueInput, setValueInput] = useState<string>('')

    const onSearchRecipe = () => {
        navigate(`/search/${valueInput.toLowerCase()}`)
    }

    return (
        <div className='wrapper--navbar'>
            <div className='navbar__search'>
                <input
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            onSearchRecipe()
                        }
                    }}
                    value={valueInput}
                    onChange={e => setValueInput(e.target.value)}
                    placeholder='Поиск...'
                    type="text"/>
                <AiOutlineSearch
                    onClick={onSearchRecipe}
                    className='search__icon'/>
            </div>
        </div>
    );
};

export default Navbar;