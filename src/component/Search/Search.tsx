import React from 'react';
import './Search.scss'

type Props = {
    valueInp: string
    onSearch: () => void
    setValueInp: (value: string) => void
}

const Search = ({setValueInp, onSearch, valueInp}: Props) => {
    return (
        <div className='wrapper--search'>
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        onSearch()
                    }
                }}
                value={valueInp}
                onChange={(e) => setValueInp(e.target.value)}
                placeholder='Введите название рецепта'
                type="text"/>
            <button onClick={onSearch}>Найти</button>
        </div>
    );
};

export default Search;