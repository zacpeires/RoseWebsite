import axios from 'axios';
import history from '../history'

const defaultRecipes = {
    allRecipes: [],
    singleRecipe: {}
}

const GET_SINGLE_RECIPE = "GET_SINGLE_RECIPE";
const GET_ALL_RECIPES = "GET_ALL_RECIPES";

const getSingleArticle = (recipe) => ({
    type: GET_SINGLE_RECIPE,
    recipe
});

const getAllRecipes = (recipes) => ({
    type: GET_ALL_RECIPES,
    recipes
})

export const gotSingleRecipe = (newRecipe) => {
    return async dispatch => {
        const { data } = axios.post('/api/recipes/new-recipes', newRecipe);
        dispatch(dispatch(data));
    }
}

export default (state = defaultRecipes, action) => {
    switch(action.type) {
        case GET_SINGLE_RECIPE:
            return {...state, singleRecipe: action.recipe}
        default: 
            return state;

    }
}