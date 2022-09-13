import { MealListItem } from '../MealListItem/MealListItem.jsx';
import './index.scss';

export const MealList = (props) => {
    const { meals = [], categoryName='' } = props;

    return (
        <div className='meal-list'>
            <ul>
                {meals.map((meal) => (
                    <MealListItem 
                    key={ meal.idMeal }
                    meal={ meal }
                    categoryName={ categoryName }
                    />
                ))}
            </ul>
        </div>
    )
}