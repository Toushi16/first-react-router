import { Link } from 'react-router-dom';
import './index.scss';

export const CategoryListItem = (props) => {
    const { category } = props;

    return (
        <Link
            className='link'
            to={`/catalog/${category.strCategory}`}
            title={`browse the catalog ${category.strCategory}`}
        >
        <li className='category-list-item'>
            <div>
                <img
                className='thumb'
                src={ category.strCategoryThumb }
                alt={`preview of ${category.strCategory} category`}/>
            </div>            
            { category.strCategory }
        </li>
        </Link>
    )
}