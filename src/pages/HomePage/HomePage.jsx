import './index.scss';
import { ENDPOINTS } from '../../utils/endpoints.js';
import { useFetch } from '../../utils/usefetch.js';
import { CategoryList } from '../../components/CategoryList/CategoryList.jsx';

export const HomePage = () => {
    const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

    return (
        <div className="homepage">
            {data ? ( <CategoryList categories={ data?.categories ?? [] } />
            ) : (
                'An error has occurred!'
            )}
        </div>
    )
}

export default HomePage;