import './index.scss';
import { Link } from 'react-router-dom';

export const MealListItem = (props) => {
    const { meal = {}, categoryName = '' } = props;

    return (
        <Link
             className='link'
             to={`/catalog/${categoryName}/${meal.strMeal}`}
             title={`browse the catalog ${meal.strMeal}`}
        >
        <li className='meal-list-item'>
            <div>
                <img
                 className='thumb'
                 src={ meal.strMealThumb }
                 alt={`preview of ${meal.strCategory} recipe`} 
                />
            </div>
            { meal.strMeal }
        </li>
        </Link>
    )
}