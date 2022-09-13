import { Link, useParams } from 'react-router-dom';
import { ENDPOINTS } from '../../utils/endpoints.js';
import { useFetch } from '../../utils/usefetch.js';
import { MealList } from '../../components/MealList/MealList.jsx';
import './index.scss';

export const CatalogPage = () => {
    const params = useParams();
    const { categoryName } = params;

    const {data, loading, error} = useFetch(`${ENDPOINTS.FILTER}?c=${categoryName}`);

    if (loading) {
        return 'Loading...';
    }

    if (!(data?.meals?.length)) {
        return 'Not Found';
    }

    return (
        <div className='catalog'>
            <MealList categoryName={ categoryName } meals={ data?.meals }/>
        </div>
    )
}

export default CatalogPage;