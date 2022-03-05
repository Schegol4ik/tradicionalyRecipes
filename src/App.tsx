import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./redux/redux-store";
import Recipe from "./pages/Recipe/Recipe";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {

    const recipes = useSelector((state: RootState) => state.recipesReducer)


    return (
        <BrowserRouter>
            <Header category={recipes.categories_menu}/>
            <Routes>
                <Route path='/' element={<Main recipes={recipes}/>}/>
                <Route path='/recipe/:id' element={<Recipe recipes={recipes}/>}/>
                <Route path='/category/:slug' element={<CategoryPage recipes={recipes.recipe}
                                            category={recipes.categories_menu}
                />}/>
                <Route path='/search/:query' element={<SearchPage recipes={recipes.recipe} />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;