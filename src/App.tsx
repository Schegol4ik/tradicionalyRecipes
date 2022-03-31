import React, {useState} from 'react';
import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./redux/redux-store";
import Recipe from "./pages/Recipe/Recipe";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import AddRecipe from "./pages/AddRecipe/AddRecipe";

const App = () => {

    const recipes = useSelector((state: RootState) => state.recipesReducer)
    const [isMenu, setIsMenu] = useState<boolean>(false)

    const handleMenu = () => {
        setIsMenu(prev => !prev)
    }


    return (
        <div className='wrapper'>
            <BrowserRouter>
                <Header category={recipes.categories_menu} handleMenu={handleMenu} isMenu={isMenu}/>
                <Routes>
                    <Route path='/tradicionalyRecipes' element={<Main recipes={recipes}/>}/>
                    <Route path='/recipe/:id' element={<Recipe recipes={recipes}/>}/>
                    <Route path='/category/:slug' element={<CategoryPage recipes={recipes.recipe}
                                                                         category={recipes.categories_menu}
                    />}/>
                    <Route path='/search/:query' element={<SearchPage recipes={recipes.recipe}/>}/>
                    <Route path='/addRecipe' element={<AddRecipe/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;