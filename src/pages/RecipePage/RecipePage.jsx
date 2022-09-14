import './index.scss';
import { ENDPOINTS } from '../../utils/endpoints.js';
import { useFetch } from '../../utils/usefetch.js';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Ingredient } from '../../components/Ingredient/Ingredient.jsx';

const formatRecipe = (data) => {
    const initialRecipe = data.meals?.at(0) ?? {};

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const name = initialRecipe[`strIngredient${i}`];
        const value = initialRecipe[`strMeasure${i}`];

        if (!name?.length) {
            continue;
        }

        ingredients.push({ name, value });
    }

    return {
        name: initialRecipe.strMeal,
        id: initialRecipe.idMeal,
        youtubeUrl: initialRecipe.strYoutube,
        thumbnailSrc: initialRecipe.strMealThumb,
        tags: initialRecipe.strTags,
        instructions: initialRecipe.strInstructions,
        ingredients,
    };
};

export const RecipePage = (props) => {
    const { tab } = props;
    const { categoryName, recipeName, id } = useParams();
    const { data, loading, error } = useFetch(
        `${ENDPOINTS.DETAIL}?i=${id}`,
        formatRecipe
    );

    if (!data) {
        return 'Loading...';
    }

    return (
        <div className='recipe'>
            <div>
                <h1 className='recipe-name'>{ categoryName } - { recipeName }</h1>
                <div className='recipe-button'>
                    <Link
                     to='ingredients'
                     title='See Ingredients'
                    >
                    <button>Ingredients</button>
                    </Link>
                    <Link
                     to='instructions'
                     title='See Instructions'
                    >
                    <button>Instructions</button>
                    </Link>
                    <Link
                     to='video'
                     title='Watch Video'
                    >
                    <button>Video</button>
                     </Link>
                </div>
            </div>
            <Outlet context={data} />
        </div>
    );
};

export default RecipePage;