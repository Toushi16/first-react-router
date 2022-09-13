import { CategoryListItem } from '../CategoryListItem/CategoryListItem.jsx';
import './index.scss';

export const CategoryList = (props) => {
    const { categories = [] } = props;

    return (
        <div className='category-list'>
            <ul>
                {categories.map((category) => (
                    <CategoryListItem 
                     key={ category.idCartegory } 
                     category={ category } 
                    />
                ))}
            </ul>
        </div>
    )
}