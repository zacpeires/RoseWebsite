import axios from 'axios';
import history from '../history';

const defaultArticles = {
    singleArticle: {},
    allArticles: []
};

const GET_SINGLE_ARTICLE = 'GET_SINGLE_ARTICLE';
const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';

const getSingleArticle = article => ({
    type: GET_SINGLE_ARTICLE,
    article
})

const getAllArticles = articles => ({
    type: GET_ALL_ARTICLES,
    articles
})

export const addNewArticle = articleData => {
    return async disaptch => {
        const { data } = await axios.post('/api/blog-posts/post-article', articleData);
        disaptch(getSingleArticle(data))
        history.push('/')
    }
}

export default (state = defaultArticles, action) => {
    switch (action.type) {
        case GET_SINGLE_ARTICLE:
            return {...state, singleArticle: action.article};
        case GET_ALL_ARTICLES:
            return {...state, allArticles: action.articles};
        default:
            break;
    }
}